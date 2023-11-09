package com.example.reservation.room.service;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;


import com.example.reservation.exception.ResourceNotFoundException;
import com.example.reservation.model.Reservation;
import com.example.reservation.model.Room;
import com.example.reservation.repository.RoomRepository;


@Service
public class RoomServiceImpl implements RoomService{
	
	@Autowired
	private RoomRepository roomRepository;



	@Override
	public Room addRoom(Room room) {
		// TODO Auto-generated method stub
		   Room rooms= roomRepository.save(room);
	        return rooms;
	}

	@Override
	public Room updateRoom(long id, Room room) {
		// TODO Auto-generated method stub
		
		Room update = roomRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("No room available with this " +id));
		
		 update.setNo_of_Adult( room.getNo_of_Adult());
		 update.setNo_of_child( room.getNo_of_child());
		 update.setCheck_in_date( room.getCheck_in_date());
		 update.setCheckout_date( room.getCheckout_date());
		 update.setRoom_type(room.getRoom_type());
		
		 update.setPrice( room.getPrice());
		 update.setNumber_of_Nights( room.getNumber_of_Nights());
		 update.setTotal_price( room.getTotal_price());
		 Room rooms= roomRepository.save(update);
		 
		 return rooms;
	}

	@Override
	public List<Room> getAllRoom() {
		// TODO Auto-generated method stub
		List<Room> l=roomRepository.findAll();
		return l;
	}
	@Override
	public void deleteroom(Long id) {
		// TODO Auto-generated method 
		Room room = roomRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException(" id not exist :" + id));

	roomRepository.delete(room);
	}

	@Override
	public Room getroombyid(Long id) {
		return roomRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Room not found with id: " + id));
		
	}
	
	
	
	@Override
		public List<Room> searchAvailableRooms(LocalDate checkInDate, LocalDate checkOutDate) {

			return roomRepository.findAllByCheckInDateLessThanEqualAndCheckOutDateGreaterThanEqual(checkOutDate,

					checkInDate);

		}	
}
	/*@Override

		public List<Room> searchByType(String type) {

			return roomRepository.findRoomsByType(type);

		}
		}
	/*@Override
	 public List<Room> searchRooms(
	            String checkInDate,
	             String checkOutDate
	            ) throws ParseException  {
	        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
	        Date checkIn = dateFormat.parse(checkInDate);
	        Date checkOut = dateFormat.parse(checkOutDate);
	        
	        List<Room> availableRooms = roomRepository.findAvailableRooms(checkIn, checkOut);
	        
	        if (availableRooms.isEmpty()) {
	            throw new ResourceNotFoundException("No rooms available for the selected dates and number of guests.");
	        }
	        return availableRooms;
	    }
*/

	/*@Override
	public Room getroombycode(String code) {
		// TODO Auto-generated method stub
		return roomRepository.findBycode(code)
                .orElseThrow(() -> new ResourceNotFoundException("Room not found with id: " + code));
	}*/


