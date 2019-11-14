import {Exercise} from './exercise.model';
import {  Subject } from 'rxjs/Subject';

export class TrainingService {
  exerciseChanged = new Subject<Exercise>();
  availableExercises: Exercise[] = [
    {id: 'crunches', name: 'Crunchessssss', duration: 30, calories: 8},
    {id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 8},
    {id: 'side-lunges', name: 'Side Lunges', duration: 130, calories: 8},
    {id: 'burpees', name: 'Burpees', duration: 60, calories: 8},
  ];
  private runningExercise: Exercise;

  getAvailableExercises() {
    return this.availableExercises.slice();
  }
  startExercise(selectedId: string) {
    this.runningExercise = this.availableExercises.find(ex => ex.id === selectedId);
    this.exerciseChanged.next({...this.runningExercise });
  }
}
