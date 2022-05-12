package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Feedback;
import com.app.pojos.User;

public interface FeedbackRepository extends JpaRepository<Feedback,Integer>
{
	
}
