# Workshop-9-task
Workshop 9 task

## Changes made and experiments during coding

<img width="399" alt="截屏2025-01-28 03 17 22" src="https://github.com/user-attachments/assets/2b3747d9-0cce-4c39-888f-469ce3dda46a" />

- Used circles to manipulate the video capture to create a foggy effect.

![WechatIMG66](https://github.com/user-attachments/assets/67c80bda-5b23-4e72-8885-c4e6597d1578)
<img width="873" alt="截屏2025-01-28 03 44 58" src="https://github.com/user-attachments/assets/9bd2e987-4c60-4552-b950-8ea09ec1383e" />

- I noticed that in the preview, the video image was mirrored, and I want to fix it.
- * I changed the ellipse function. ('width - this.x')
 

### problems met

<img width="1027" alt="截屏2025-01-28 03 24 58" src="https://github.com/user-attachments/assets/801f0157-3f80-4083-980b-9dc3f825cae3" />

- Tried to apply an invert filter, but the filter only worked for half of the circles.

<img width="870" alt="截屏2025-01-28 03 27 33" src="https://github.com/user-attachments/assets/eed49e7b-9ecc-4ac8-8172-003830ca415b" />

- If I move the filter into the draw function, the manipulation will be really fast, and the video capture is not clear.

<img width="880" alt="截屏2025-01-28 03 51 48" src="https://github.com/user-attachments/assets/e15c5f3b-3fba-43d3-b0e5-069fa891ae2d" />

- I used thin lines to manipulate the camera capture. But the horizontal lines and vertical lines are using the same randomized positions.

<img width="973" alt="截屏2025-01-28 03 57 13" src="https://github.com/user-attachments/assets/93d40e7e-116a-4446-9c77-110ac97a7e33" />

- I tried to use 'random'. But then I realized, only the lines position changed, the lines colour were still the original colours. (did not change with the position)
 
<img width="980" alt="截屏2025-01-28 04 11 12" src="https://github.com/user-attachments/assets/ce11f508-3493-4186-86c1-69812b952399" />

- I created another system to seperate two different types of lines to solve this problem. 


### Here is the URL to the webpage for this project: https://qzha880.github.io/Workshop-9-task/
