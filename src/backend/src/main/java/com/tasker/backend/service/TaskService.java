package com.tasker.backend.service;

import com.tasker.backend.entity.UserTask;
import com.tasker.backend.dao.UserTaskDao;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskService {
    @Autowired
    UserTaskDao userTask;

    public String addTask(UserTask task) {
        Logger logger = LoggerFactory.getLogger(TaskService.class);

        return "taskResult";
    }
}
