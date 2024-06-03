let bankAccount = {
    ownerName: "John Doe",
    accountNumber: "123456789",
    balance: 1000,

    deposit: function (account, amount) {
        account.balance += amount;
        console.log("Deposit of", amount, "completed. Current balance:", account.balance);
    },

    withdraw: function (account, amount) {
        if (account.balance >= amount) {
            account.balance -= amount;
            console.log("Withdrawal of", amount, "completed. Current balance:", account.balance);
        } else {
            console.log("Insufficient funds. Current balance:", account.balance);
        }
    },
};

console.log("Owner:", bankAccount.ownerName);
console.log("Account Number:", bankAccount.accountNumber);
console.log("Initial balance:", bankAccount.balance);

bankAccount.deposit(bankAccount, 500);
bankAccount.withdraw(bankAccount, 200);
bankAccount.withdraw(bankAccount, 1500);



let weather = {
    temperature: -5,
    humidity: 70,
    windSpeed: 10,
    isBelowZero: function () {
        if (weather.temperature < 0) {
            console.log("температура нижче 0 градусів Цельсія");
            return true;
        } else {
            console.log("температура вище або рівна 0 градусів Цельсія");
            return false;
        }
    },
};
weather.isBelowZero();



let user = {
    name: "John Doe",
    email: "johndoe@example.com",
    password: "password123",
    login: function(inputEmail, inputPassword) {
        if (inputEmail === user.email && inputPassword === user.password) {
            console.log("Успішний вхід. Вітаємо, " + user.name + "!");
        } else {
            console.log("Помилковий email або пароль. Будь ласка, спробуйте ще раз.");
        }
    }
};
user.login("johndoe@example.com", "password123");
user.login("johndoe@example.com", "wrongpassword");


let movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,
    isHighlyRated: function() {
        if (movie.rating > 8) {
            return true;
        } else {
            return false;
        }
    }
};
console.log("Чи високо оцінений фільм?", movie.isHighlyRated()); 
