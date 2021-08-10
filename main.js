Webcam.set({
    width: 350,
    height: 250,
    image_format: "png",
    png_quality: 100
});
Webcam.attach("#camera");
console.log(ml5.version)
classfier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/xQRttb4CE/model.json", model_loaded)

function model_loaded() {
    console.log("Model is Loaded")
}

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="image_1" src="' + data_uri + '" > '
    })
}