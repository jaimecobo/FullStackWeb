import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/skill';
import { SkillsService } from '../services/skills.service';
import { Level } from "../types/level.enum";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  // skills = ['Abstract Mathematics', 'Philosophy', 'Developing software']
  // skills : Skill[] = [
  //   {
  //     id: 0,
  //     name: 'Abstract Mathematics',
  //     level: Level.Expert
  //   },
  //   {
  //     id: 1,
  //     name: 'Philosophy',
  //     level: Level.Advanced
  //   },
  //   {
  //     id: 2,
  //     name: 'Developing Software',
  //     level: Level.Expert
  //   }
  // ]

  skills: Skill[];
  // private skillsService: SkillsService;
  // dataService : SkillsService;

  constructor(private skillsService: SkillsService ) { 
    // this.skillsService = skillsService;
    // this.skills = skillsService.skills;
  }

  ngOnInit() {
    this.skills = this.skillsService.skills;
  }
  
}
