Feature('700 Packaging user flows');

Before((I) => {
  I.amOnPage('/packaging');
});

Scenario('View task list', (I) => {
  I.click('Order');
  I.amOnPage('/packaging/task-list');
});

Scenario('Complete buyer tasks', (I) => {
  I.click('Order');
  I.amOnPage('/packaging/task-list');
  I.click('Basket Task'); //need a way of finding which task is a basket task
  I.amOnPage('/packaging/accepted-task-buyer');  
  I.click('Complete');
  I.amOnPage('/packaging/task-list');  
});

Scenario('Complete product tasks', (I) => {
  I.click('Order');
  I.amOnPage('/packaging/task-list');
  I.click('Product Task'); //need a way of finding which task is a product task
  I.amOnPage('/packaging/accepted-task-product');  
  I.click('Complete');
  I.amOnPage('/packaging/task-list');  
});

