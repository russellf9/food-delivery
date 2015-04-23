# Food Delivery Code Test

## Class Hierarchy Design
1. Design a simple class hierarchy, in the programming language of your choice (PHP preferably), that models the act of food delivery.

  In terms of an agnostic REST api (used by Node for instance, which would be relatively easy to set up on a local machine )

  ```
  /api/customer/create
  /api/customer/login

  /api/customer/order
  /api/customer/purchase

  /api/customer/history

  /api/menu
  ```



2. You should have at least three classes and a workflow for a client to order food.


3. Provide (pseudo) code that defines the classes and the components that use the classes.  Explain the relationship between the classes and components.
4. Employ two software design patterns and explain how you would use them in your components.
5. Explain how you configure your components.
6. What features would your design need to scale?

## Unit Testing
1. Write unit tests for the core components in your hierarchy.
2. Provide (pseudo) code that defines the tests for the components.
3. Explain why the tests are necessary.

## User Interface Design
1. Choose a language or toolset to write a UI to expose the business logic you created in your class hierarchy (Bootstrap + Javascript preferably).
2. Provide a "mock up" of the UI workflow.  This does not have to be exact; the goal is to identify how you the UI would "use" your classes.  You can provide a drawing, diagram, or (pseudo) code that shows your UI design.

## Database
1. Choose a database to back your class hierarchy.
2. Explain the pros and cons of operating the database solution you chose.


# Ionic

I used the default "tab" starter app, to build and test:

```
$ ionic platform add ios

$ ionic build ios

$ ionic emulate ios

```
