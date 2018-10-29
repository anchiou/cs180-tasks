package com.tasker.backend.dao;

import com.tasker.backend.entity.UserTask;
import org.springframework.data.repository.CrudRepository;

public interface UserTaskDao extends CrudRepository<String, UserTask> {
    String addTask(UserTask task);
    String updateTask(UserTask task);
    String deleteTask(); // TODO: Add parameter
    // TODO: Finish getters and sort
}
