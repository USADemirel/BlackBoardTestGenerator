package com.teachertools.BlackBoardTestGenerator.controller;

import com.teachertools.BlackBoardTestGenerator.model.BlackBoardResponse;
import com.teachertools.BlackBoardTestGenerator.model.QuestionsExcelFormatted;
import org.springframework.web.bind.annotation.*;

@RestController
public class BlackBoardQuestionController {

@GetMapping("/api/questions")
public void recieveQuestion() {
 System.out.println("linked");
}

@RequestMapping(value = "api/questions", method = RequestMethod.POST, headers = "Accept=application/JSON")
public BlackBoardResponse recieve(@RequestBody QuestionsExcelFormatted questionsExcelFormatted) {
 System.out.println("linked");
 System.out.println(questionsExcelFormatted);
// System.out.println(questionsExcelFormatted.getTitle() + "----");
 return new BlackBoardResponse(questionsExcelFormatted.getTitle(), "test.zip","Succesfully Generated");
}

}
