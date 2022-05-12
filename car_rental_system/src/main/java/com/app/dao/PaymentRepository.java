package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Integer> {

	@Query("from Payment p JOIN FETCH p.book_id JOIN FETCH p.carid")
	/*Above Query can be visualize as
	 * select model_name, p.payment_Id, b.booking_id from Payment p, Car_Booking b, cars c
	 *  where p.book_id = b.booking_id and c.c_id = b.car_id;
	 */
	 List<Payment> findallP();
}
