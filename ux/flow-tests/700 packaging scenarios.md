# Scenarios to test for user flows: 700 packaging domain

### Background info
2 users types: packing admins and packers. Packing admins function as packers, but have extra activities they need to do.

Packer goals: 
* The packers job is to fulfil all the orders from the group, package and distribute them. 
* Don't repeat work that other people are doing

Packers can either view a list of products or a list of individual orders. Clicking on a product will show all the orders for that product, clicking on the order will show all the products for an order. 

Packers want to view the backlog of tasks, select a task and run with it, mark the task as complete and select another task.


### Major assumptions

* Users will understand task pooling in the way that cobuy is implementing it
* We've delineated packing admins and packers, and defined workflows for them. Do the roles and workflows make sense to a user?
* Users will understand the sequence of actions suggested by the flows we have defined.
* Packing admins want to see flagged items per order; they don't need to see all the flagged items across orders.

### User flows

User flows for packers: 
* See a list of member orders
* See a list of tasks 
* Complete a member order 
 * complete subtasks in member order
* Complete tasks against a product
* Flag that a task needs review (bring to attention of lead packer). There needs to be a confirmation window in this flow that is absent from the wireframe.
 * select order -> flag the whole task
 * select order -> select task -> flag subtask

Additional user flows for packing admins (incomplete):
* Resolve a flagged item in an order
 * select order -> view flagged tasks -> 
* Escalate a flagged item (with a supplier?)
* Report an order's outcome once all tasks are finished (including archiving the order)
* Reschedule a packing date 
 * select order -> go to settings -> update date -> save
* Audit items received (open order for redistribution)

### Parking lot / more detailed

* Go to each domain through menu (2 click step on mobile)


