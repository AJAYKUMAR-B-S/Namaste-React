## Namaste React 🚀 Course by Akshay Saini

# Episode-06-Exploring-the-World

## Q: What is `Microservice`?

A: `Microservices` are an `architectural approach` to `building` and `deploying software applications` that involves breaking down an application into `smaller`, `independent services` that can be `developed`, `deployed`, and `maintained separately`. These services are `loosely coupled` and communicate with each other over a network, often using lightweight protocols like `HTTP` or `messaging queues`.

- Each service is responsible for a `single functionality` or feature of the application and can be developed, deployed, and scaled independently.
- The Microservice architecture has a significant impact on the relationship between the `application` and the `database`.
- Instead of sharing a single database with other microservices, each microservice has its own database. It often results in duplication of some data, but having a database per microservice is essential if you want to benefit from this architecture, as it ensures `loose coupling`.

## Q: What is `Monolith architecture`?

A: A `monolithic architecture` is a traditional approach to `designing software`. Monolithic architecture is an `architectural pattern of designing` and `developing a complete application as a single unit`. For example, a traditional application will have a `frontend`, `API, services`, `load balancer`, and `database`. If we build everything together and deploy it on the `server`, that’s called a `monolithic architecture`, where services `tightly couple together`.

- This means that any changes or updates to the application require modifying and `redeploying the entire monolith`.
- Monolithic architectures are often characterized by their simplicity and ease of development, especially for small to medium-sized applications.
- However, they can become complex and difficult to maintain as the size and complexity of the application grow.

## Q: What is the difference between `Monolith and Microservice`?

A: With `monolithic architectures`, all processes are tightly coupled and run as a single service. This means that if one process of the application experiences a spike in demand, the entire architecture must be scaled. Adding or improving a monolithic application’s features becomes more complex as the code base grows. This complexity limits experimentation and makes it difficult to implement new ideas. Monolithic architectures add risk for application availability because many dependent and tightly coupled processes increase the impact of a single process failure.

With a `microservices architecture`, an application is built as independent components that run each application process as a service. These services communicate via a well-defined interface using lightweight APIs. Services are built for business capabilities and each service performs a single function. Because they are independently run, each service can be updated, deployed, and scaled to meet demand for specific functions of an application.

## Q: What is `Shimmer UI`?

A: A `Shimmer UI` resembles the page's actual UI, so users will understand how quickly the web or mobile app will load even before the content has shown up. It gives people an idea of what's about to come and what's happening (while UI currently loading) when a page full of content/data takes more than 3 - 5 seconds to load.
Shimmer UI is a great way for loading the applications. Instead of showing a loading circle we can design a shimmer UI for our application that is good for user experience.

## Q: What is `CORS`?

A: CORS stands for `Cross-Origin Resource Sharing`. CORS is a `security feature built into web browsers` that controls how web pages from one domain can `request` and `interact` with resources from another domain. These resources may include; `web fonts`, `videos`, `scripts`, `iframes`, `images` and `stylesheets`. By default, client applications making AJAX requests are only allowed to request resources that live on the same origin as the location where the client application is running.

- For instance, if our React application is running on `http://localhost:3000`, and it needs to fetch data from an API running on `http://api.example.com`, CORS must be configured correctly on the server to allow this cross-origin request.
