package com.ianmac.webapp3.bootstrapdata;

import com.ianmac.webapp3.model.Car;
import com.ianmac.webapp3.repository.CarRepository;
import com.ianmac.webapp3.service.CarService;
import com.ianmac.webapp3.service.CarServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Bootstrap implements CommandLineRunner {

//    @Autowired
    private final CarRepository carRepository;

    public Bootstrap(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        Car car1 = new Car();
        car1.setBrand("Toyota");
        car1.setModel("Supra");
        car1.setColour("Orange");

        Car car2 = new Car();
        car2.setBrand("Mitsubishi");
        car2.setModel("Evo");
        car2.setColour("Red");

        carRepository.save(car1);
        carRepository.save(car2);
    }
}
