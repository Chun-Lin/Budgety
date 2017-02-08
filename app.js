//BudgetController
var budgetController = (function () {

})();


//UI Controller
var UIController = (function () {

})();


//GLOBAL Controller
var controller = (function (budgetCtrl, UICtrl) {

    function ctrlAddItem() {
        // 1. Get input data

        // 2. Add the item to the budgetController

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
})(budgetController, UIController);