package com.teachertools.BlackBoardTestGenerator.model;

public class BlackBoardResponse {
 String title;
 String downloadLink;
 String message;

public BlackBoardResponse(String title, String downloadLink, String message) {
 this.title = title;
 this.downloadLink = downloadLink;
 this.message = message;
}

public String getTitle() {
 return title;
}

public void setTitle(String title) {
 this.title = title;
}

public String getDownloadLink() {
 return downloadLink;
}

public void setDownloadLink(String downloadLink) {
 this.downloadLink = downloadLink;
}

public String getMessage() {
 return message;
}

public void setMessage(String message) {
 this.message = message;
}
}
