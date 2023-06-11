const CarDetail = require('../models/carDetail');
const CarDetails = require('../models/carDetail');
const cars = require('./carControllers');

const home = async (req, res) => {
    try {
        const car = await CarDetail.find({});
        if (car.length === 0) {
            await CarDetail.insertMany(cars);
            res.redirect('/');
        } else {
            console.log(car);
            res.render('index', {car: car});
        }
        
    } catch (error) {
        console.log(error);
    }
}

const about = async (req, res) => {
    try {
        res.render('about');
    } catch (error) {
        console.log(error);
    }
}

const services = async (req, res) => {
    try {
        res.render('service');
    } catch (error) {
        console.log(error);
    }
}

const contact = async (req, res) => {
    try {
        res.render('contact');
    } catch (error) {
        console.log(error);
    }
}

const signUp = async (req, res) => {
    try {
        res.render('signUp');
    } catch (error) {
        console.log(error);
    }
}

const login = async (req, res) => {
    try {
        res.render('login');
    } catch (error) {
        console.log(error);
    }
}

const carRoute = async (req, res) => {
    try {
        const car = await CarDetail.find({});
        res.render('car', {car: car});
    } catch (error) {
        console.log(error);
    }
}

const payment = async (req, res) => {
    try {
        res.render('payment');
    } catch (error) {
        console.log(error);
    }
}

const order = async (req, res) => {
    try {
        res.render('order');
    } catch (error) {
        console.log(error);
    }
}

const team = async (req, res) => {
    try {
        res.render('team');
    } catch (error) {
        console.log(error);
    }
}

const testimonial = async (req, res) => {
    try {
        res.render('testimonial');
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    home, 
    about, 
    services, 
    contact,
    carRoute,
    signUp,
    login,
    payment,
    order,
    team,
    testimonial
}