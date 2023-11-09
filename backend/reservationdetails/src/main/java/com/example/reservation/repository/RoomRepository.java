package com.example.reservation.repository;



import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.reservation.model.Room;

import feign.Param;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {



	
    
	//@Query("SELECT r FROM Room r WHERE (:room_type LIKE room_type )")
    //List<Room> findRoomsByType(@Param("room_type") String room_ype);
	@Query("SELECT r FROM Room r WHERE (:check_in_date BETWEEN r.check_in_date AND r.checkout_date) AND (:checkout_date BETWEEN r.check_in_date AND r.checkout_date)")
	List<Room> findAllByCheckInDateLessThanEqualAndCheckOutDateGreaterThanEqual(LocalDate checkout_date,
			LocalDate check_in_date);


	
	//List<Room> findAvailableRooms(Date checkInDate, Date checkOutDate);

}
