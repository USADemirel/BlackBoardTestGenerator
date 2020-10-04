package com.teachertools.BlackBoardTestGenerator.model;

import java.util.List;

public class QuestionsExcelFormatted {
 String title;
 List<List<String>> questions;

public String getTitle() {
 return title;
}

public void setTitle(String title) {
 this.title = title;
}

public List<List<String>> getQuestions() {
 return questions;
}

public void setQuestions(List<List<String>> questions) {
 this.questions = questions;
}

public QuestionsExcelFormatted(String title, List<List<String>> questions) {
 this.title = title;
 this.questions = questions;
}

@Override
public String toString() {
 return "QuestionsExcelFormatted{" +
                 "title='" + title + '\'' +
                 ", questions=" + questions +
                 '}';
}
}
