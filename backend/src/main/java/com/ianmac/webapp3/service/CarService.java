package com.ianmac.webapp3.service;

import com.ianmac.webapp3.model.Car;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface CarService {

    List<Car> getAllCars();
    Car saveCar(Car car);
    Car getCarById(long id);
    void deleteCarById(long id);
    void deleteAllCars();
    Car updateCar(long id, Car car);
}
