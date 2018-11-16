package com.tasker.backend.dao;

public interface BasicDao<T> {

    public int insert(T entity);

    public int delete(int id);

    public int update(T Entity);

    public T get(int id);
}
