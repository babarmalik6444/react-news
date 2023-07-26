# React News App

This project include User Auth module and News feed with search filters. 

## Getting Started

### Clone the Repository

To get started, first, clone this repository:

```bash
git clone [https://github.com/babarmalik6444/react-news.git]
```
Navigate to project folder
```sh
cd react-news
```
Run docker
```sh
docker build . -t reactimage 
```
Wait until the build is ready and run
```sh
docker run reactimage 
```
Once container is ready, open new terminal window and run  
```sh
docker ps
```
Copy container ID and run 
```sh
docker exec -it [container_id] bash
```
Navigate to app folder
```sh
cd app 
```
Now run 
```sh
npm start
```
Development server will start and then visit 
```sh
http://localhost:3000
```




