//BudgetController
var budgetController = (function () {
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            income: [],
            expense: []
        },
        totals: {
            income: 0,
            expense: 0
        }
    };

    return {
        addItem: function (type, des, val) {
            var newItem, ID;

            // Create new ID
            if (data.allItems[type].length === 0) {
                ID = 0;
            } else {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }

            // Create new item based on 'income' or 'expense' type
            if (type === 'income') {
                newItem = new Income(ID, des, val);
            } else if (type === 'expense') {
                newItem = new Expense(ID, des, val);
            }

            // Push it into our data structure
            data.allItems[type].push(newItem);

            // Return the new element
            return newItem;
        },

        testing: function () {
            console.log(data);
        }
    };



})();


//UI Controller
var UIController = (function () {
    // Class names in HTML file
    var DOMString = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };


    //closure makes functions can be used in public
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMString.inputType).value,
                description: document.querySelector(DOMString.inputDescription).value,
                value: document.querySelector(DOMString.inputValue).value
            };
        },

        getDOMstring: function () {
            return DOMString;
        }

    };
})();


//GLOBAL Controller
var controller = (function (budgetCtrl, UICtrl) {

    var DOM = UICtrl.getDOMstring();

    var setupEventListeners = function () {
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function () {
        // 1. Get input data
        var input = UICtrl.getInput();
        console.log(input);
        // 2. Add the item to the budgetController
        var newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
    };

    return {
        init: function () {
            console.log('project started!');
            setupEventListeners();
        }
    }

})(budgetController, UIController);


// Because functions in controller are private, so I need to init the controller to execute the functions
controller.init();