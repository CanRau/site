---
date: 2020-01-16T00:00:00+03:00
title: "Queue and Asynchronous Processing"
description: "Using message queues to manage task processing asynchronously"
learning: ["AWell Architected"]
learning_weight: 1210
---

In a previous topic we covered the [Asynchronous Messaging](/knowledge-base/architectural-patterns/asynchronous-messaging/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=architectural-patterns) architectural pattern, its advantages and some high-level examples.

Message Queue is one way of implementating this type of architecture, and now we are going to cover it more in depth.

# What is a Message Queue

The Message Queue model has four basic components:

1. **Producer**: a service that sends a message in order to notify an event, or request execution of a task, for example;
1. **Consumer**: the service responsible for retrieving messages from the queue and processing them accordingly;
1. **Queue**: the service which receives messages from the Producer and provides it on-demand to the Consumer;
1. **Message**: a piece of information (e.g.: a JSON-compatible string) generated by the Producer to instruct or facilitate the processing job by the Consumer;

![Message Queue](/images/knowledge-base/architecture/message-queue.png)


# Advantages

Message Queues are perhaps the easiest way to implement and maintain an asynchronous architecture. Below are some of the advantages for choosing a message queue:


## Multi-Producer, Single-Consumer

A Message Queue has a "_multi-to-one_" model: multiple producers and one single consumer of messages[^2]. This architecture simplifies the implementation, management, testing and debuging of asynchronous systems.

Since there is only one place where messages get processed (_single-consumer_), testing and debuging usually poses less complexity in comparison to other asynchronous messaging models.

The Message Queue model still allows, though, for multiple services to produce messages for a single queue. This flexibility further enhances the possibilities to build a loosely-coupled architecture and also allows for reusability of components.


## Reliability and Scalability

Consider Service A produces messages for Service B. If either of the services goes offline, the other can continue publishing or consuming messages from the queue.

In case of a queue failure, there could be back-up or dead-letter queues to capture messages not queued during the downtime.

A third service would be responsible for moving messages from the backup/dead-letter ones into the main queue once it's back online. Both Service A and Service B would remain online during the queue failure.


## Flexibility

Modifying, extending or entirely swaping services (both producers or consumer) is much easier in a Message Queue implementation. When services aren't tied together, changes to one service cannot impact directly the other components of the system.

While a consumer is replaced, for example, producers can continue producing and submitting messages seamlessly. Even if the new consumer version results in issues, messages pulled from the queue would fail to be processed and go back to the queue again. Later, when a fix is deployed to the consumer service, messages can resume being processed normally.


# Options to Implement

## Managed and Serverless options

Most - if not all - cloud services will provide a managed or serverless message queue option ready to integrate in any project. Arguably one of the most well-known and widely used is [AWS SQS](https://aws.amazon.com/sqs/).

These services are usually charged on a per-request-basis, can scale very rapidly to accomodate fluctuating demands and provide easy to consume metrics and insights to manage the queue status.

This is the least-effort path to implement any asynchronous messaging queue pattern in software projects.


## Battle-tested open source projects

There are literally dozens, if not hundreds of open source projects available for speeding up a custom implementation. Some of them are very well known and reported to have been battle tested in production by many companies.

Below is a list, in no particular order preference:

* [RabbitMQ](https://www.rabbitmq.com/)
* [ActiveMQ](https://activemq.apache.org/)
* [Kafka](https://kafka.apache.org/) [^1]
* [ZeroMQ](https://zeromq.org/)
* [Celery](http://www.celeryproject.org/)

This is mostly recommended for large-enough teams that have access to the right DevOps skills, time and financial resources to handle its own implementation.

For small teams working on a tight schedule and budget, a managed/serverless option in many cases will be a better option to start with.


# Common Properties

When implementing a Message Queue system (or using a managed/serverless one), architects and developers will have to make a few decisions with regards to how the queue should work.

Below we present the main properties most commonly open for configuration in Message Queue systems.

## Delivery model

**Push vs. pull**

In a push model, the queue will proactively notify the consumer when there are messages available for processing.

The pull model, on the other hand, depends on the consumer to frequently query the queue in order to check for pending messages.

**Scheduling**

Some queue systems will allow to schedule a specific date and time for message delivery. The producer is usually responsible for setting the schedule. The message is immediately received by the queue, but is kept away from the consumer until the scheduled time comes.

**Delay**

When publishing a message, the Producer can choose to delay the delivery to the consumer by a certain time span (e.g. 10 minutes or 2 hours).

**Prioritization**

Urgent and important messages can be flagged for priority delivery by the queue to the consumer, in detriment to other less important messages already queued before.


## Consistency

**At least once vs. Exactly once**

To reach maximum scalability and reliability, most Message Queue systems will run on a distributed environment across a cluster of servers. Even managed/serverless services will have this characteristic behind the scenes.

The easiest queue implementation is "at least once delivery". It means that, sometimes, the same message might be delivered to the consumer more than once. If that is not a problem, this implementation can be cheaper and easier to scale.

"Exactly once" delivery is also usually available for contexts where a duplicated message could become a problem for the overall system. It ensures strong consistency in message reception and delivery. In order to do so, it usually sacrifices a bit in terms of scalability and/or costs.

## Ordering

**FIFO vs. Unordered**

In case the order of messages received and processed do not matter, an "unordered" model will probably be cheaper and more scalable.

There are situations, though, where messages must be consumed and processed in the exact same order they've been produced. The FIFO (First In, First Out) model will meet this requirement.


# Footnotes

[^1]:
    Although Apache Kafka is a stream processing system, it can be used as a message queue as well.

[^2]:
    Some Message Queue systems on the market might break this architecture, though, by allowing multiple consumers to process messages. In these cases, the system will probably look more as a [Pub/Sub model](/knowledge-base/architectural-patterns/pub-sub-messaging/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=architecture-and-best-practices) than a Queue.


# References and further reading

[Scaling Microservices with Message Queues to Handle Data Bursts](https://read.acloud.guru/scaling-microservices-with-message-queue-2d389be5b139), by Songtham Tung

[Event-Driven Architecture - Software Architecture Patterns](https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/ch02.html), by Mark Richards

[Microservice Architecture Best Practices: Messaging Queues](https://dzone.com/articles/microservice-architecture-best-practices-messaging), by Ranga Karanam
