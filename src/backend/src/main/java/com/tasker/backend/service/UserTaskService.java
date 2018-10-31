package com.tasker.backend.service;

import com.tasker.backend.entity.UserTask;
import com.tasker.backend.dao.UserTaskDao;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;

import static java.sql.Date.valueOf;

@Service
public class UserTaskService {
    static Logger logger = LoggerFactory.getLogger(UserTaskService.class);

    @Autowired
    UserTaskDao userTaskDao;

    public UserTask addTask(JSONObject data) {
//        JSONObject data = new JSONObject(String);

        String id = data.getString("id");
        String name = data.getString("name");
        boolean status = data.getBoolean("status");
        Date deadline = valueOf(data.getString("deadline"));
        int priority = data.optInt("priority");
        String description = data.optString("description");

        UserTask task = new UserTask(id, name, status, deadline, priority, description);
        userTaskDao.addTask(task);

        return task;
    }

    public UserTask updateTask(JSONObject data) {
        //JSONObject data = new JSONObject(data);

        String id = data.getString("id");
        String name = data.getString("name");
        boolean status = data.getBoolean("status");
        Date deadline = valueOf(data.getString("deadline"));
        int priority = data.optInt("priority");
        String description = data.optString("description");

        UserTask task = new UserTask(id, name, status, deadline, priority, description);
        userTaskDao.updateTask(task);
        return task;
    }

    public String deleteTask(String id) {

        return "taskResult";
    }
}
