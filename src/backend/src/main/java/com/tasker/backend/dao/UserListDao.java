package com.tasker.backend.dao;

import com.tasker.backend.entity.UserList;
import com.tasker.backend.entity.UserTask;

import java.util.List;

public interface UserListDao extends BasicDao<UserList>{
    List<UserTask> getTasks(int id);
    int renameList(int id, String name);
}