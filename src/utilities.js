// JavaScript source code
export const drawRect = (detections, mesh) => { 
	detections.forEach(prediction=>{
		//getting predictions 
		const [x,y,width, height] = prediction['bbox']; 
		const text = prediction['class'];

		//make pretty 
		const colour = 'red'
		mesh.font = "23px Arial"
		mesh.strokeStyle = colour;
		mesh.fillstyle = colour;

		//make rectangle and captions
		mesh.beginPath()
		mesh.fillText(text, x, y)
		mesh.rect(x, y, width, height)
		mesh.stroke()

	})


}