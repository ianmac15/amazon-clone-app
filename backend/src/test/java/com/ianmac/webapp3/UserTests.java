package com.ianmac.webapp3;

import com.ianmac.webapp3.model.Car;
import com.ianmac.webapp3.repository.CarRepository;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Optional;

@DataJpaTest
public class UserTests {

    @Autowired
    private CarRepository carRepository2;

//    public UserTests(CarRepository carRepository) {
//        this.carRepository = carRepository;
//    }

    @Test
    public void testSaveCar() {

        Car car1 = new Car("Mazda","Rx7", "Blue");
        carRepository2.save(car1);
        Optional<Car> newCar = carRepository2.findById(Long.valueOf(1));

//        boolean testing = newCar.get().getBrand() == "Mazda";
        Assert.assertEquals("Mazda",newCar.get().getBrand());

    }

    @Test
    public void testGetCar() {
        Car car1 = new Car("Mazda","Rx7", "Blue");
        Car car2 = new Car("Nissan","Skyline", "Silver");

        carRepository2.save(car1);
        carRepository2.save(car2);

        Optional<Car> newCar = carRepository2.findById(Long.valueOf(2));
        boolean testing = newCar.get().getBrand() == "Nissan";
        Assert.assertTrue(testing);
    }

    @Test
    public void testGetAllCars() {

        Car car1 = new Car("Mazda","Rx7", "Blue");
        Car car2 = new Car("Nissan","Skyline", "Silver");

        carRepository2.save(car1);
        carRepository2.save(car2);

        Assert.assertNotNull(carRepository2.findAll());
    }


}
