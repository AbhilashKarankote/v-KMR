import { TestBed } from '@angular/core/testing';

import { AddKnowledgeService } from './add-knowledge.service';

describe('AddKnowledgeService', () => {
  let service: AddKnowledgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddKnowledgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
