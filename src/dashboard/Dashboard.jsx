"use client";
import React, { useState } from "react";
import questionmark from "../../public/images/questionmark.svg";
import people from "../../public/images/people.jpeg";
import { Input } from "@/components/ui/input";
import search from "../../public/images/search.svg";
import calendar from "../../public/images/calendar.svg";
import sparkel from "../../public/images/sparkel.svg";
import filter from "../../public/images/filter.svg";
import share from "../../public/images/share.svg";
import { Button } from "@/components/ui/button";
import plus from "../../public/images/plus.svg";
import hamburger from "../../public/images/hamburger.svg";
import clock from "../../public/images/clock.svg";
import Modal from "@/components/Modal";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import clsx from "clsx";

const Dashboard = () => {
  const [time, setTime] = useState(new Date());
  const [showTitle, setShowTitle] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showFinished, setShowFinished] = useState(false);
  const [titledata, setTitleData] = useState({
    title: "",
    status: "",
    priority: "",
    deadline: "",
    description: "",
  });
  const [progressdata, setProgressData] = useState({
    title: "",
    status: "",
    priority: "",
    deadline: "",
    description: "",
  });
  const [reviewData, setReviewData] = useState({
    title: "",
    status: "",
    priority: "",
    deadline: "",
    description: "",
  });
  const [finisheddata, setFinishedData] = useState({
    title: "",
    status: "",
    priority: "",
    deadline: "",
    description: "",
  });
  const [todo, setTodo] = useState([
    {
      title: "rahul",
      status: "pending",
      priority: "Urgent",
      deadline: "5 may",
      description: "hello my name is rahul",
    },
    {
      title: "rahul",
      status: "pending",
      priority: "Low",
      deadline: "5 may",
      description: "hello my name is rahul",
    },
    {
      title: "rahul",
      status: "pending",
      priority: "Urgent",
      deadline: "5 may",
      description: "hello my name is rahul",
    },
    {
      title: "rahul",
      status: "pending",
      priority: "Medium",
      deadline: "5 may",
      description: "hello my name is rahul",
    },
  ]);
  const [progress, setProgress] = useState([
    {
      title: "rahul",
      status: time.toString().substring(0, 10) + " ago",
      priority: "Urgent",
      deadline: "5 may",
      description: "hello my name is rahul",
    },
  ]);
  const [review, setReview] = useState([
    {
      title: "rahul",
      status: "pending",
      priority: "Urgent",
      deadline: "5 may",
      description: "hello my name is rahul",
    },
  ]);
  const [finished, setFinished] = useState([
    {
      title: "rahul",
      status: "pending",
      priority: "Low",
      deadline: "5 may",
      description: "hello my name is rahul",
    },
  ]);

  return (
    <>
      <div className="dashboard-main">
        <div className="upper-container">
          <div className="header">Good morning, Joe!</div>
          <div className="right-section">
            Help & feedback{" "}
            <div className="rs-div">
              <img className="rs-img" src={questionmark.src} alt="" />
            </div>
          </div>
        </div>
        <div className="second-row">
          <div className="columns">
            <div className="image">
              <img className="inside-img" src={people.src} alt="" />
            </div>
            <div className="text-container">
              <div className="heading">Introducing tags</div>
              <div className="text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="image">
              <img className="inside-img" src={people.src} alt="" />
            </div>
            <div className="text-container">
              <div className="heading">Introducing tags</div>
              <div className="text">
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="image">
              <img className="inside-img" src={people.src} alt="" />
            </div>
            <div className="text-container">
              <div className="heading">Introducing tags</div>
              <div className="text">
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
              </div>
            </div>
          </div>
        </div>
        <div className="third-row">
          <div className="main-search">
            <div className="search">
              <Input className="inside-search" placeholder="search" />
              <img className="search-icon" src={search.src} alt="" />
            </div>
          </div>
          <div className="second-column">
            <div className="calendar">
              <div className="calendar-text">Calendar view</div>
              <div className="calendar-img">
                <img src={calendar.src} alt="" />
              </div>
            </div>
            <div className="calendar">
              <div className="calendar-text">Automation</div>
              <div className="calendar-img">
                <img src={sparkel.src} alt="" />
              </div>
            </div>
            <div className="calendar">
              <div className="calendar-text">filter</div>
              <div className="calendar-img">
                <img src={filter.src} alt="" />
              </div>
            </div>
            <div className="calendar">
              <div className="calendar-text">Share</div>
              <div className="calendar-img">
                <img src={share.src} alt="" />
              </div>
            </div>
            <div className="btn">
              <Button className="inside-btn">
                Create new{" "}
                <div className="icon">
                  <img className="inside-icon" src={plus.src} alt="" />
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="todos">
          <DragDropContext onDragEnd={() => {}}>
            <div className="todo-list">
              <div className="todo-main">
                <div className="todo-header">
                  <div className="top-section">To do</div>
                  <div className="side-section">
                    <img src={hamburger.src} alt="" />
                  </div>
                </div>
                <Droppable droppableId="title">
                  {(provided) => (
                    <div
                      className="card"
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      {todo.map((opt, ind) => {
                        return (
                          <Draggable
                            draggableId={ind.toString()}
                            index={ind}
                            key={ind.toString()}
                          >
                            {(provided) => (
                              <>
                                <div
                                  className="main"
                                  key={ind}
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <div className="title">{opt.title}</div>
                                  <div className="description">
                                    {opt.description}
                                  </div>
                                  <div className="priority">
                                    <div
                                      className={clsx("inside-priority", {
                                        " green": opt.priority == "Low",
                                        red: opt.priority == "Medium",
                                        " orange": opt.priority == "Urgent",
                                      })}
                                    >
                                      {opt.priority}
                                    </div>
                                  </div>
                                  <div className="deadline">
                                    <div className="d-img">
                                      <img src={clock.src} alt="" />
                                    </div>
                                    <div className="d-text">{opt.deadline}</div>
                                  </div>
                                  <div className="status">{opt.status}</div>
                                </div>
                              </>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
                <div
                  onClick={() => {
                    setShowTitle(true);
                  }}
                  className="modal-btn"
                >
                  <Modal
                    show={showTitle}
                    setShow={setShowTitle}
                    data={titledata}
                    setData={setTitleData}
                    todo={todo}
                    setTodo={setTodo}
                  />
                  <div className="plus-icon">
                    <img className="img" src={plus.src} alt="" />
                  </div>
                </div>
              </div>
              <div className="todo-main">
                <div className="todo-header">
                  <div className="top-section">To do</div>
                  <div className="side-section">
                    <img src={hamburger.src} alt="" />
                  </div>
                </div>
                <div className="card">
                  {progress.length &&
                    progress.map((opt, ind) => {
                      return (
                        <>
                          <div className="main" key={ind}>
                            <div className="title">{opt.title}</div>
                            <div className="description">{opt.description}</div>
                            <div className="priority">
                              <div
                                className={clsx("inside-priority", {
                                  " green": opt.priority == "Low",
                                  red: opt.priority == "Medium",
                                  " orange": opt.priority == "Urgent",
                                })}
                              >
                                {opt.priority}
                              </div>
                            </div>
                            <div className="deadline">
                              <div className="d-img">
                                <img src={clock.src} alt="" />
                              </div>
                              <div className="d-text">{opt.deadline}</div>
                            </div>
                            <div className="status">{opt.status}</div>
                          </div>
                        </>
                      );
                    })}
                </div>
                <div
                  onClick={() => {
                    setShowProgress(true);
                  }}
                  className="modal-btn"
                >
                  <Modal
                    show={showProgress}
                    setShow={setShowProgress}
                    data={progressdata}
                    setData={setProgressData}
                    todo={progress}
                    setTodo={setProgress}
                  />
                  <div className="plus-icon">
                    <img className="img" src={plus.src} alt="" />
                  </div>
                </div>
              </div>
              <div className="todo-main">
                <div className="todo-header">
                  <div className="top-section">To do</div>
                  <div className="side-section">
                    <img src={hamburger.src} alt="" />
                  </div>
                </div>
                <div className="card">
                  {review.map((opt, ind) => {
                    return (
                      <>
                        <div className="main" key={ind}>
                          <div className="title">{opt.title}</div>
                          <div className="description">{opt.description}</div>
                          <div className="priority">
                            <div
                              className={clsx("inside-priority", {
                                " green": opt.priority == "Low",
                                red: opt.priority == "Medium",
                                " orange": opt.priority == "Urgent",
                              })}
                            >
                              {opt.priority}
                            </div>
                          </div>
                          <div className="deadline">
                            <div className="d-img">
                              <img src={clock.src} alt="" />
                            </div>
                            <div className="d-text">{opt.deadline}</div>
                          </div>
                          <div className="status">{opt.status}</div>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div
                  onClick={() => {
                    setShowReview(true);
                  }}
                  className="modal-btn"
                >
                  <Modal
                    show={showReview}
                    setShow={setShowReview}
                    data={reviewData}
                    setData={setReviewData}
                    todo={review}
                    setTodo={setReview}
                  />
                  <div className="plus-icon">
                    <img className="img" src={plus.src} alt="" />
                  </div>
                </div>
              </div>
              <div className="todo-main">
                <div className="todo-header">
                  <div className="top-section">To do</div>
                  <div className="side-section">
                    <img src={hamburger.src} alt="" />
                  </div>
                </div>
                <div className="card">
                  {finished.map((opt, ind) => {
                    return (
                      <>
                        <div className="main" key={ind}>
                          <div className="title">{opt.title}</div>
                          <div className="description">{opt.description}</div>
                          <div className="priority">
                            <div
                              className={clsx("inside-priority", {
                                " green": opt.priority == "Low",
                                red: opt.priority == "Medium",
                                " orange": opt.priority == "Urgent",
                              })}
                            >
                              {opt.priority}
                            </div>
                          </div>
                          <div className="deadline">
                            <div className="d-img">
                              <img src={clock.src} alt="" />
                            </div>
                            <div className="d-text">{opt.deadline}</div>
                          </div>
                          <div className="status">{opt.status}</div>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div
                  onClick={() => {
                    setShowFinished(true);
                  }}
                  className="modal-btn"
                >
                  <Modal
                    show={showFinished}
                    setShow={setShowFinished}
                    data={finisheddata}
                    setData={setFinishedData}
                    todo={finished}
                    setTodo={setFinished}
                  />
                  <div className="plus-icon">
                    <img className="img" src={plus.src} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </DragDropContext>
        </div>
      </div>
      {/* <Modal show={show} setShow={setShow} /> */}
    </>
  );
};

export default Dashboard;
