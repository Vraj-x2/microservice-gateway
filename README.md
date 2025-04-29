
# Microservice Gateway - API Gateway for Microservices

This project is a Spring Boot gateway application that connects to multiple microservices: Police and Plushie services.  
It acts as a proxy and manages routing between the front-end and the microservices.

## 📚 Technologies Used

- Java 21
- Spring Boot
- Spring Web
- Lombok
- DevTools

## ⚙️ How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/Vraj-x2/microservice-gateway.git
   ```

2. Navigate into the project directory:
   ```bash
   cd microservice-gateway
   ```

3. Run the application:
   ```bash
   ./mvnw spring-boot:run
   ```
   or, if you are using Windows:
   ```bash
   mvnw spring-boot:run
   ```

4. The service will start on:
   ```
   http://localhost:8080
   ```

## 📦 Connected Microservices

- **Police Microservice** - Manages Police entity records.
- **Plushie Microservice** - Manages Plushie item records.

## 🌐 API Routing

The gateway forwards client requests to the appropriate microservices with matching URLs.

## 🖥️ Frontend

An Angular frontend is embedded inside `src/main/resources/webapp` and interacts through the Gateway REST endpoints.

## 📌 Notes

- No direct database connection in Gateway.
- Acts purely as a REST API proxy and Angular hosting server.

---

## 🚀 Author

[Vraj Contractor](https://github.com/Vraj-x2)
