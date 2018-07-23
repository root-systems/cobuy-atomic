Feature('700 Packaging user flows');

Before((I) => {
  I.amOnPage('/packaging');
});

Scenario('View task list', (I) => {
  I.click('#order');
  I.amOnPage('/packaging/task-list');
});

Scenario('Complete buyer tasks', (I) => {
  I.click('#order');
  I.amOnPage('/packaging/task-list');
  I.click('#basketTasks:first-child');
  I.amOnPage('/packaging/accepted-task-buyer');
  I.click('#complete');
  I.amOnPage('/packaging/task-list');
});

Scenario('Complete product tasks', (I) => {
  I.click('#order');
  I.amOnPage('/packaging/task-list');
  I.click('#productTasks:first-child');
  I.amOnPage('/packaging/accepted-task-product');
  I.click('#complete');
  I.amOnPage('/packaging/task-list');
});
