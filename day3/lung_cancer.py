import cv2
import numpy as np
import streamlit as st
import pathlib

from tensorflow import keras
import os

model = keras.models.load_model('CNN.h5')

# Preprocess the uploaded image

# Streamlit app
def main():
    st.title("Lung Cancer Detection")

    # File upload widget

app = st(_name_, template_folder="templates")

@app.route("/", methods=["GET", "POST"])
def upload_predict():
    model = load_model('model_version3.hdf5')
    if request.method == 'POST':
        image_file = request.files["image"]
        if image_file:
            UPLOAD_FOLDER = './static/client_ctscan'
            app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
            file_name = generate_custom_name(image_file.filename)
            image_file.save(os.path.join(UPLOAD_FOLDER, file_name))
            img_path = "./static/client_ctscan/check_cancer.png"
            image_shape = (305,430,3)
            N_CLASSES = 4
            BATCH_SIZE = 1
            test_path="./static/test"
            test_datagen = ImageDataGenerator(dtype='float32', rescale = 1.0/255.0)
            test_generator = test_datagen.flow_from_directory(test_path,
                                                            batch_size = BATCH_SIZE,
                                                            target_size = (305,430),
                                                            class_mode = 'categorical')
            class_names=list(test_generator.class_indices.keys())
            img = load_img(img_path, target_size=(460, 460))
            img_array = img_to_array(img)
            img_array = np.expand_dims(img_array, 0)

            prediction = model.predict(img_array)
            image_file.save(os.path.join(app.config['UPLOAD_FOLDER'], file_name))
            image_location = os.path.join(app.config['UPLOAD_FOLDER'], file_name)
            return render_template("index.html", prediction= "This image most likely belongs to {} with a {:.2f} percent confidence."
                .format(class_names[np.argmax(prediction)], 100 * np.max(prediction)), image=image_location)

    return render_template("index.html", prediction="Please Upload your CT Scan Report Image")


def generate_custom_name(original_file_name):
    return "check_cancer" + pathlib.Path(original_file_name).suffix


if _name_ == "_main_":
    app.run(port=12000, debug=True)