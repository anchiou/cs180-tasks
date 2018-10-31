package com.tasker.backend.dao;

import com.tasker.backend.entity.UserTask;
import org.springframework.web.bind.annotation.RequestParam;

public interface UserTaskDao extends BasicDao{
    void addTask(UserTask task);
    void updateTask(UserTask task);
    void deleteTask(String id);
    // TODO: Finish getters and sort
}
