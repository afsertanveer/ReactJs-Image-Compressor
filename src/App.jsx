

function App() {
  const WIDTH=400;

  const handleSubmit = e =>{
    e.preventDefault();
    let image = e.target.image_input.files[0];
    console.log(image);
    let reader = new FileReader;
    reader.readAsDataURL(image);
    // console.log(reader);
    reader.onload = e1 =>{
      let imageUrl = e1.target.result;
      // console.log(imageUrl);
      let bigImage = document.createElement("img");
      bigImage.src = imageUrl;
      bigImage.onload = e2 =>{
        let canvas = document.createElement("canvas");
        let ratio = WIDTH/e2.target.width;
        canvas.width = WIDTH;
        canvas.height = e2.target.height*ratio;

        const context = canvas.getContext("2d");
        context.drawImage(bigImage,0,0,canvas.width,canvas.height);
        let newImageUrl = context.canvas.toDataURL('image/jpeg',80);

        let newImage = document.createElement("img");
        newImage.src = newImageUrl;
        console.log(newImageUrl);
        document.getElementById("wrapper").appendChild(newImage);
      }
    }
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="file" name="image_input" accept=".jpg, .jpeg, .png" id="" multiple />

      <button type="submit">Show</button>
    </form>
    <div id="wrapper"></div>
    </>
  )
}

export default App
