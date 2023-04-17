const image_input = document.querySelector("#image_input");
var upload_image = "";

image_input.addEventListener("change", function(){
    const file = this.files[0];
    if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.addEventListener("load", () =>{
            upload_image = reader.result;
            document.querySelector("#display_image").style.backgroundImage = `url(${upload_image})`;
        });
        reader.readAsDataURL(file);
    } else {
        alert("Please select a valid image file.");
    }
});
