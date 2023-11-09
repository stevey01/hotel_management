package com.example.reservation;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.spy;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.joda.time.LocalDate;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;


import com.example.reservation.Service.ReservationService;
import com.example.reservation.model.Reservation;
import com.example.reservation.model.Room;
import com.example.reservation.repository.Reservationrepository;
import com.example.reservation.repository.RoomRepository;
import com.example.reservation.room.service.RoomService;


@SpringBootTest
class ReservationdetailsApplicationTests {

	@Test
	void contextLoads() {
	}
	@Autowired
	ReservationService reservationservice;
	@Autowired
	RoomService roomservice;
	
	@MockBean
	RoomRepository roomrepository;
	
	@MockBean
	Reservationrepository reservationrepository;
	
	@Test
	public void getAllreservations()
	{
		when(reservationrepository.findAll()).thenReturn(Stream.of(new Reservation(1,5,6,"23","25","pending",3)).collect(Collectors.toList()));
	
	assertEquals(1,reservationservice.getallreservations().size());
	}
	@Test
public void savereservations()
{
	Reservation reservation=new Reservation(1,5,6,"23","25","pending",3);
	
	when(reservationrepository.save(reservation)).thenReturn(reservation);
	
	assertEquals(reservation,reservationservice.createreservation(reservation));
}
	@Test
	public void deleteguest()
	{
	     Long id = 1L;
	     Reservation reservation=new Reservation(1,5,6,"23","25","pending",3);
	        reservation.setId(id);



	        when(reservationrepository.findById(id)).thenReturn(Optional.of(reservation));



	        reservationservice.deletereservation(id);



	     
	        verify(reservationrepository,times(1)).delete(reservation);
	}
	@Test
	public void updatereservations() {
		   Reservation reservation=new Reservation(1,5,6,"23","25","pending",3);
	        Long id = 5L;
	        Reservation existingReservation = new Reservation();
	        existingReservation.setId(id);
	        when(reservationrepository.findById(id)).thenReturn(Optional.of(existingReservation));
	        when(reservationrepository.save(existingReservation)).thenReturn(existingReservation);
	        Reservation updatedReservation = reservationservice.updatereservation(id, reservation);
	        assertEquals(reservation.getNo_of_Adult(), updatedReservation.getNo_of_Adult());
	       
	    }
	void getreservationtbyid()
	{
		Reservation reservation= new Reservation(1,5,6,"23","25","pending",3);
        Long id = 5L;
	    reservation.setId(id);
	   
	    when(reservationrepository.findById(id)).thenReturn(Optional.of(reservation));

	    Reservation reservations = reservationservice.getreservationbyid(id);

	    
	    assertEquals(reservation.getId(), reservations.getId());
	    
	}
	
	@Test
	public void getAllrooms() throws ParseException
	{
		String checkIn="12/9/2001";
		SimpleDateFormat formatter1=new SimpleDateFormat("dd/MM/yyyy");  
	    Date date1=formatter1.parse(checkIn);  
		String checkOut="14/9/2003";
		SimpleDateFormat formatter2=new SimpleDateFormat("dd/MM/yyyy");  
	    Date date2=formatter2.parse(checkOut);  
	    Room room=new Room();
	
	assertEquals(1,roomservice.getAllRoom().size());
	}
	@Test
	public void saveroomdetails() throws ParseException
	{
		
		
		String checkIn="12/9/2001";
		
	    LocalDate date1=LocalDate.parse(checkIn);  
		String checkOut="14/9/2003";
		
	    
	    LocalDate date2=LocalDate.parse(checkOut);  
		Room room=new Room();
		
		when(roomrepository.save(room)).thenReturn(room);
		
		assertEquals(room,roomservice.addRoom(room));
	}
	
	
	@Test
	public void updateroom() throws ParseException
	{
		
		
		String checkIn="12/9/2001";
		
	    LocalDate date1=LocalDate.parse(checkIn);  
		String checkOut="14/9/2003";
		
	    
	    LocalDate date2=LocalDate.parse(checkOut);   
		
	    Room room=new Room();
		 Long id = 1L;
        Room existingRoom = new Room();
        existingRoom.setId(id);
      
        // Mock the behavior of reservationRepository.findById(id)
        when(roomrepository.findById(id)).thenReturn(Optional.of(existingRoom));

       
        when(roomrepository.save(existingRoom)).thenReturn(existingRoom);


        Room updatedRoom =roomservice.updateRoom(id, room);

        
        assertEquals(room.getNo_of_Adult(), updatedRoom.getNo_of_Adult());
        assertEquals(room.getNo_of_child(), updatedRoom.getNo_of_child());
        
	}
	
}
