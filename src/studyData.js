/**
 * plan.md 기반의 실제 56일 학습 데이터
 */

export const studyData = [
  // --- 1단계: 의학이론 (1~14일차) ---
  {
    day: 1, date: '4/27',
    tasks: [{ id: 'd1-new', type: 'new', title: '의학 Ch 1~3 (골절 총론 등)', pages: 'p. 14~39', category: '의학이론', revisionStep: 1 }]
  },
  {
    day: 2, date: '4/28',
    tasks: [
      { id: 'd2-new', type: 'new', title: '의학 Ch 4~5-11 (소아 골절 등)', pages: 'p. 40~65', category: '의학이론', revisionStep: 1 },
      { id: 'd2-rev-1', type: 'rev', title: '의학 Ch 1~3', pages: 'p. 14~39', category: '의학이론', revisionStep: 2, gap: 1 }
    ]
  },
  {
    day: 3, date: '4/29',
    tasks: [
      { id: 'd3-new', type: 'new', title: '의학 Ch 5-12~19 (요골~수지)', pages: 'p. 66~85', category: '의학이론', revisionStep: 1 },
      { id: 'd3-rev-1', type: 'rev', title: '의학 Ch 4~5-11', pages: 'p. 40~65', category: '의학이론', revisionStep: 2, gap: 1 }
    ]
  },
  {
    day: 4, date: '4/30',
    tasks: [
      { id: 'd4-new', type: 'new', title: '의학 Ch 6-1~15 (골반~슬관절)', pages: 'p. 86~110', category: '의학이론', revisionStep: 1 },
      { id: 'd4-rev-1', type: 'rev', title: '의학 Ch 5-12~19', pages: 'p. 66~85', category: '의학이론', revisionStep: 2, gap: 1 },
      { id: 'd4-rev-3', type: 'rev', title: '의학 Ch 1~3', pages: 'p. 14~39', category: '의학이론', revisionStep: 3, gap: 3 }
    ]
  },
  {
    day: 5, date: '5/1',
    tasks: [
      { id: 'd5-new', type: 'new', title: '의학 Ch 6-16~28 (경골~말초신경)', pages: 'p. 111~135', category: '의학이론', revisionStep: 1 },
      { id: 'd5-rev-1', type: 'rev', title: '의학 Ch 6-1~15', pages: 'p. 86~110', category: '의학이론', revisionStep: 2, gap: 1 },
      { id: 'd5-rev-3', type: 'rev', title: '의학 Ch 4~5-11', pages: 'p. 40~65', category: '의학이론', revisionStep: 3, gap: 3 }
    ]
  },
  {
    day: 6, date: '5/2',
    tasks: [
      { id: 'd6-new', type: 'new', title: '의학 Ch 7~8 (흉부/척추 외상)', pages: 'p. 136~155', category: '의학이론', revisionStep: 1 },
      { id: 'd6-rev-1', type: 'rev', title: '의학 Ch 6-16~28', pages: 'p. 111~135', category: '의학이론', revisionStep: 2, gap: 1 },
      { id: 'd6-rev-3', type: 'rev', title: '의학 Ch 5-12~19', pages: 'p. 66~85', category: '의학이론', revisionStep: 3, gap: 3 }
    ]
  },
  {
    day: 7, date: '5/3',
    tasks: [
      { id: 'd7-new', type: 'new', title: '의학 Ch 9~10 (두부/순환기계)', pages: 'p. 156~170', category: '의학이론', revisionStep: 1 },
      { id: 'd7-rev-1', type: 'rev', title: '의학 Ch 7~8', pages: 'p. 136~155', category: '의학이론', revisionStep: 2, gap: 1 },
      { id: 'd7-rev-3', type: 'rev', title: '의학 Ch 6-1~15', pages: 'p. 86~110', category: '의학이론', revisionStep: 3, gap: 3 },
      { id: 'd7-rev-6', type: 'rev', title: '의학 Ch 1~3', pages: 'p. 14~39', category: '의학이론', revisionStep: 4, gap: 6 }
    ]
  },
  {
    day: 8, date: '5/4',
    tasks: [
      { id: 'd8-new', type: 'new', title: '의학 Ch 11~12 (호흡/소화기계)', pages: 'p. 171~175', category: '의학이론', revisionStep: 1 },
      { id: 'd8-rev-1', type: 'rev', title: '의학 Ch 9~10', pages: 'p. 156~170', category: '의학이론', revisionStep: 2, gap: 1 },
      { id: 'd8-rev-3', type: 'rev', title: '의학 Ch 6-16~28', pages: 'p. 111~135', category: '의학이론', revisionStep: 3, gap: 3 },
      { id: 'd8-rev-6', type: 'rev', title: '의학 Ch 4~5-11', pages: 'p. 40~65', category: '의학이론', revisionStep: 4, gap: 6 }
    ]
  },
  {
    day: 9, date: '5/5',
    tasks: [
      { id: 'd9-new', type: 'new', title: '의학 Ch 13~14 (내분비/비뇨기)', pages: 'p. 176~177', category: '의학이론', revisionStep: 1 },
      { id: 'd9-rev-1', type: 'rev', title: '의학 Ch 11~12', pages: 'p. 171~175', category: '의학이론', revisionStep: 2, gap: 1 },
      { id: 'd9-rev-3', type: 'rev', title: '의학 Ch 7~8', pages: 'p. 136~155', category: '의학이론', revisionStep: 3, gap: 3 },
      { id: 'd9-rev-6', type: 'rev', title: '의학 Ch 5-12~19', pages: 'p. 66~85', category: '의학이론', revisionStep: 4, gap: 6 }
    ]
  },
  {
    day: 10, date: '5/6',
    tasks: [
      { id: 'd10-new', type: 'new', title: '의학 Ch 15 (혈액/면역계)', pages: 'p. 178~179', category: '의학이론', revisionStep: 1 },
      { id: 'd10-rev-1', type: 'rev', title: '의학 Ch 13~14', pages: 'p. 176~177', category: '의학이론', revisionStep: 2, gap: 1 },
      { id: 'd10-rev-3', type: 'rev', title: '의학 Ch 9~10', pages: 'p. 156~170', category: '의학이론', revisionStep: 3, gap: 3 },
      { id: 'd10-rev-6', type: 'rev', title: '의학 Ch 6-1~15', pages: 'p. 86~110', category: '의학이론', revisionStep: 4, gap: 6 }
    ]
  },
  {
    day: 11, date: '5/7',
    tasks: [
      { id: 'd11-new', type: 'new', title: '의학 Ch 16 (감각기계)', pages: 'p. 180~189', category: '의학이론', revisionStep: 1 },
      { id: 'd11-rev-1', type: 'rev', title: '의학 Ch 15', pages: 'p. 178~179', category: '의학이론', revisionStep: 2, gap: 1 },
      { id: 'd11-rev-3', type: 'rev', title: '의학 Ch 11~12', pages: 'p. 171~175', category: '의학이론', revisionStep: 3, gap: 3 },
      { id: 'd11-rev-6', type: 'rev', title: '의학 Ch 6-16~28', pages: 'p. 111~135', category: '의학이론', revisionStep: 4, gap: 6 }
    ]
  },
  {
    day: 12, date: '5/8',
    tasks: [
      { id: 'd12-new', type: 'new', title: '의학 Ch 17-1~10 (종양 총론)', pages: 'p. 190~200', category: '의학이론', revisionStep: 1 },
      { id: 'd12-rev-1', type: 'rev', title: '의학 Ch 16', pages: 'p. 180~189', category: '의학이론', revisionStep: 2, gap: 1 },
      { id: 'd12-rev-3', type: 'rev', title: '의학 Ch 13~14', pages: 'p. 176~177', category: '의학이론', revisionStep: 3, gap: 3 },
      { id: 'd12-rev-6', type: 'rev', title: '의학 Ch 7~8', pages: 'p. 136~155', category: '의학이론', revisionStep: 4, gap: 6 }
    ]
  },
  {
    day: 13, date: '5/9',
    tasks: [
      { id: 'd13-new', type: 'new', title: '의학 Ch 17-11~ (종양 간암 등)', pages: 'p. 201~215', category: '의학이론', revisionStep: 1 },
      { id: 'd13-rev-1', type: 'rev', title: '의학 Ch 17-1~10', pages: 'p. 190~200', category: '의학이론', revisionStep: 2, gap: 1 },
      { id: 'd13-rev-3', type: 'rev', title: '의학 Ch 15', pages: 'p. 178~179', category: '의학이론', revisionStep: 3, gap: 3 },
      { id: 'd13-rev-6', type: 'rev', title: '의학 Ch 9~10', pages: 'p. 156~170', category: '의학이론', revisionStep: 4, gap: 6 }
    ]
  },
  {
    day: 14, date: '5/10',
    tasks: [
      { id: 'd14-new', type: 'new', title: '의학 Ch 18~19 (정신/법정감염병)', pages: 'p. 216~230', category: '의학이론', revisionStep: 1 },
      { id: 'd14-rev-1', type: 'rev', title: '의학 Ch 17-11~', pages: 'p. 201~215', category: '의학이론', revisionStep: 2, gap: 1 },
      { id: 'd14-rev-3', type: 'rev', title: '의학 Ch 16', pages: 'p. 180~189', category: '의학이론', revisionStep: 3, gap: 3 },
      { id: 'd14-rev-6', type: 'rev', title: '의학 Ch 11~12', pages: 'p. 171~175', category: '의학이론', revisionStep: 4, gap: 6 },
      { id: 'd14-rev-13', type: 'rev', title: '의학 Ch 1~3', pages: 'p. 14~39', category: '의학이론', revisionStep: 5, gap: 13 }
    ]
  },

  // --- 2단계: 책임·근재보험 (15~28일차) ---
  {
    day: 15, date: '5/11',
    tasks: [
      { id: 'd15-new', type: 'new', title: '책근 Ch 1~2 (사례 접근/기초)', category: '책임근재', revisionStep: 1 },
      { id: 'd15-rev-1', type: 'rev', title: '의학 Ch 18~19', pages: 'p. 216~230', category: '의학이론', revisionStep: 2, gap: 1 },
      { id: 'd15-rev-3', type: 'rev', title: '의학 Ch 17-1~10', pages: 'p. 190~200', category: '의학이론', revisionStep: 3, gap: 3 },
      { id: 'd15-rev-6', type: 'rev', title: '의학 Ch 13~14', pages: 'p. 176~177', category: '의학이론', revisionStep: 4, gap: 6 },
      { id: 'd15-rev-13', type: 'rev', title: '의학 Ch 4~5-11', pages: 'p. 40~65', category: '의학이론', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 16, date: '5/12',
    tasks: [
      { id: 'd16-new', type: 'new', title: '책근 Ch 3상 (손배금/재해보상)', category: '책임근재', revisionStep: 1 },
      { id: 'd16-rev-1', type: 'rev', title: '책근 Ch 1~2', category: '책임근재', revisionStep: 2, gap: 1 },
      { id: 'd16-rev-3', type: 'rev', title: '의학 Ch 17-11~', pages: 'p. 201~215', category: '의학이론', revisionStep: 3, gap: 3 },
      { id: 'd16-rev-6', type: 'rev', title: '의학 Ch 15', pages: 'p. 178~179', category: '의학이론', revisionStep: 4, gap: 6 },
      { id: 'd16-rev-13', type: 'rev', title: '의학 Ch 5-12~19', pages: 'p. 66~85', category: '의학이론', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 17, date: '5/13',
    tasks: [
      { id: 'd17-new', type: 'new', title: '책근 Ch 3하 (사용자배상 등)', category: '책임근재', revisionStep: 1 },
      { id: 'd17-rev-1', type: 'rev', title: '책근 Ch 3상', category: '책임근재', revisionStep: 2, gap: 1 },
      { id: 'd17-rev-3', type: 'rev', title: '의학 Ch 18~19', pages: 'p. 216~230', category: '의학이론', revisionStep: 3, gap: 3 },
      { id: 'd17-rev-6', type: 'rev', title: '의학 Ch 16', pages: 'p. 180~189', category: '의학이론', revisionStep: 4, gap: 6 },
      { id: 'd17-rev-13', type: 'rev', title: '의학 Ch 6-1~15', pages: 'p. 86~110', category: '의학이론', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 18, date: '5/14',
    tasks: [
      { id: 'd18-new', type: 'new', title: '책근 기출 1~11번', category: '책임근재', revisionStep: 1 },
      { id: 'd18-rev-1', type: 'rev', title: '책근 Ch 3하', category: '책임근재', revisionStep: 2, gap: 1 },
      { id: 'd18-rev-3', type: 'rev', title: '책근 Ch 1~2', category: '책임근재', revisionStep: 3, gap: 3 },
      { id: 'd18-rev-6', type: 'rev', title: '의학 Ch 17-1~10', pages: 'p. 190~200', category: '의학이론', revisionStep: 4, gap: 6 },
      { id: 'd18-rev-13', type: 'rev', title: '의학 Ch 6-16~28', pages: 'p. 111~135', category: '의학이론', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 19, date: '5/15',
    tasks: [
      { id: 'd19-new', type: 'new', title: '책근 기출 12~22번', category: '책임근재', revisionStep: 1 },
      { id: 'd19-rev-1', type: 'rev', title: '책근 기출 1~11번', category: '책임근재', revisionStep: 2, gap: 1 },
      { id: 'd19-rev-3', type: 'rev', title: '책근 Ch 3상', category: '책임근재', revisionStep: 3, gap: 3 },
      { id: 'd19-rev-6', type: 'rev', title: '의학 Ch 17-11~', pages: 'p. 201~215', category: '의학이론', revisionStep: 4, gap: 6 },
      { id: 'd19-rev-13', type: 'rev', title: '의학 Ch 7~8', pages: 'p. 136~155', category: '의학이론', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 20, date: '5/16',
    tasks: [
      { id: 'd20-new', type: 'new', title: '책근 기출 23~44번', category: '책임근재', revisionStep: 1 },
      { id: 'd20-rev-1', type: 'rev', title: '책근 기출 12~22번', category: '책임근재', revisionStep: 2, gap: 1 },
      { id: 'd20-rev-3', type: 'rev', title: '책근 Ch 3하', category: '책임근재', revisionStep: 3, gap: 3 },
      { id: 'd20-rev-6', type: 'rev', title: '의학 Ch 18~19', pages: 'p. 216~230', category: '의학이론', revisionStep: 4, gap: 6 },
      { id: 'd20-rev-13', type: 'rev', title: '의학 Ch 9~10', pages: 'p. 156~170', category: '의학이론', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 21, date: '5/17',
    tasks: [
      { id: 'd21-new', type: 'new', title: '책근 유형별 1~15번', category: '책임근재', revisionStep: 1 },
      { id: 'd21-rev-1', type: 'rev', title: '책근 기출 23~44번', category: '책임근재', revisionStep: 2, gap: 1 },
      { id: 'd21-rev-3', type: 'rev', title: '책근 기출 1~11번', category: '책임근재', revisionStep: 3, gap: 3 },
      { id: 'd21-rev-6', type: 'rev', title: '책근 Ch 1~2', category: '책임근재', revisionStep: 4, gap: 6 },
      { id: 'd21-rev-13', type: 'rev', title: '의학 Ch 11~12', pages: 'p. 171~175', category: '의학이론', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 22, date: '5/18',
    tasks: [
      { id: 'd22-new', type: 'new', title: '책근 유형별 16~30번', category: '책임근재', revisionStep: 1 },
      { id: 'd22-rev-1', type: 'rev', title: '책근 유형별 1~15번', category: '책임근재', revisionStep: 2, gap: 1 },
      { id: 'd22-rev-3', type: 'rev', title: '책근 기출 12~22번', category: '책임근재', revisionStep: 3, gap: 3 },
      { id: 'd22-rev-6', type: 'rev', title: '책근 Ch 3상', category: '책임근재', revisionStep: 4, gap: 6 },
      { id: 'd22-rev-13', type: 'rev', title: '의학 Ch 13~14', pages: 'p. 176~177', category: '의학이론', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 23, date: '5/19',
    tasks: [
      { id: 'd23-new', type: 'new', title: '책근 유형별 31~44번', category: '책임근재', revisionStep: 1 },
      { id: 'd23-rev-1', type: 'rev', title: '책근 유형별 16~30번', category: '책임근재', revisionStep: 2, gap: 1 },
      { id: 'd23-rev-3', type: 'rev', title: '책근 기출 23~44번', category: '책임근재', revisionStep: 3, gap: 3 },
      { id: 'd23-rev-6', type: 'rev', title: '책근 Ch 3하', category: '책임근재', revisionStep: 4, gap: 6 },
      { id: 'd23-rev-13', type: 'rev', title: '의학 Ch 15', pages: 'p. 178~179', category: '의학이론', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 24, date: '5/20',
    tasks: [
      { id: 'd24-new', type: 'new', title: '책근 약술 1~14번', category: '책임근재', revisionStep: 1 },
      { id: 'd24-rev-1', type: 'rev', title: '책근 유형별 31~44번', category: '책임근재', revisionStep: 2, gap: 1 },
      { id: 'd24-rev-3', type: 'rev', title: '책근 유형별 1~15번', category: '책임근재', revisionStep: 3, gap: 3 },
      { id: 'd24-rev-6', type: 'rev', title: '책근 기출 1~11번', category: '책임근재', revisionStep: 4, gap: 6 },
      { id: 'd24-rev-13', type: 'rev', title: '의학 Ch 16', pages: 'p. 180~189', category: '의학이론', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 25, date: '5/21',
    tasks: [
      { id: 'd25-new', type: 'new', title: '책근 약술 15~28번', category: '책임근재', revisionStep: 1 },
      { id: 'd25-rev-1', type: 'rev', title: '책근 약술 1~14번', category: '책임근재', revisionStep: 2, gap: 1 },
      { id: 'd25-rev-3', type: 'rev', title: '책근 유형별 16~30번', category: '책임근재', revisionStep: 3, gap: 3 },
      { id: 'd25-rev-6', type: 'rev', title: '책근 기출 12~22번', category: '책임근재', revisionStep: 4, gap: 6 },
      { id: 'd25-rev-13', type: 'rev', title: '의학 Ch 17-1~10', pages: 'p. 190~200', category: '의학이론', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 26, date: '5/22',
    tasks: [
      { id: 'd26-new', type: 'new', title: '책근 약술 29~42번', category: '책임근재', revisionStep: 1 },
      { id: 'd26-rev-1', type: 'rev', title: '책근 약술 15~28번', category: '책임근재', revisionStep: 2, gap: 1 },
      { id: 'd26-rev-3', type: 'rev', title: '책근 유형별 31~44번', category: '책임근재', revisionStep: 3, gap: 3 },
      { id: 'd26-rev-6', type: 'rev', title: '책근 기출 23~44번', category: '책임근재', revisionStep: 4, gap: 6 },
      { id: 'd26-rev-13', type: 'rev', title: '의학 Ch 17-11~', pages: 'p. 201~215', category: '의학이론', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 27, date: '5/23',
    tasks: [
      { id: 'd27-new', type: 'new', title: '책근 취약사례 보완', category: '책임근재', revisionStep: 1 },
      { id: 'd27-rev-1', type: 'rev', title: '책근 약술 29~42번', category: '책임근재', revisionStep: 2, gap: 1 },
      { id: 'd27-rev-3', type: 'rev', title: '책근 약술 1~14번', category: '책임근재', revisionStep: 3, gap: 3 },
      { id: 'd27-rev-6', type: 'rev', title: '책근 유형별 1~15번', category: '책임근재', revisionStep: 4, gap: 6 },
      { id: 'd27-rev-13', type: 'rev', title: '의학 Ch 18~19', pages: 'p. 216~230', category: '의학이론', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 28, date: '5/24',
    tasks: [
      { id: 'd28-new', type: 'new', title: '책근 총정리', category: '책임근재', revisionStep: 1 },
      { id: 'd28-rev-1', type: 'rev', title: '책근 취약사례 보완', category: '책임근재', revisionStep: 2, gap: 1 },
      { id: 'd28-rev-3', type: 'rev', title: '책근 약술 15~28번', category: '책임근재', revisionStep: 3, gap: 3 },
      { id: 'd28-rev-6', type: 'rev', title: '책근 유형별 16~30번', category: '책임근재', revisionStep: 4, gap: 6 },
      { id: 'd28-rev-13', type: 'rev', title: '책근 Ch 1~2', category: '책임근재', revisionStep: 5, gap: 13 }
    ]
  },

  // --- 3단계: 자동차보험 (29~42일차) ---
  {
    day: 29, date: '5/25',
    tasks: [
      { id: 'd29-new', type: 'new', title: '자보 Ch 1~2 (개요/운행자)', pages: 'p. 2~13', category: '자동차보험', revisionStep: 1 },
      { id: 'd29-rev-1', type: 'rev', title: '책근 총정리', category: '책임근재', revisionStep: 2, gap: 1 },
      { id: 'd29-rev-3', type: 'rev', title: '책근 약술 29~42번', category: '책임근재', revisionStep: 3, gap: 3 },
      { id: 'd29-rev-6', type: 'rev', title: '책근 유형별 31~44번', category: '책임근재', revisionStep: 4, gap: 6 },
      { id: 'd29-rev-13', type: 'rev', title: '책근 Ch 3상', category: '책임근재', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 30, date: '5/26',
    tasks: [
      { id: 'd30-new', type: 'new', title: '자보 Ch 2 (타인범위 등)', pages: 'p. 14~30', category: '자동차보험', revisionStep: 1 },
      { id: 'd30-rev-1', type: 'rev', title: '자보 Ch 1~2', pages: 'p. 2~13', category: '자동차보험', revisionStep: 2, gap: 1 },
      { id: 'd30-rev-3', type: 'rev', title: '책근 취약사례 보완', category: '책임근재', revisionStep: 3, gap: 3 },
      { id: 'd30-rev-6', type: 'rev', title: '책근 약술 1~14번', category: '책임근재', revisionStep: 4, gap: 6 },
      { id: 'd30-rev-13', type: 'rev', title: '책근 Ch 3하', category: '책임근재', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 31, date: '5/27',
    tasks: [
      { id: 'd31-new', type: 'new', title: '자보 Ch 3 1절 (대인1-2/면책)', pages: 'p. 31~69', category: '자동차보험', revisionStep: 1 },
      { id: 'd31-rev-1', type: 'rev', title: '자보 Ch 2', pages: 'p. 14~30', category: '자동차보험', revisionStep: 2, gap: 1 },
      { id: 'd31-rev-3', type: 'rev', title: '책근 총정리', category: '책임근재', revisionStep: 3, gap: 3 },
      { id: 'd31-rev-6', type: 'rev', title: '책근 약술 15~28번', category: '책임근재', revisionStep: 4, gap: 6 },
      { id: 'd31-rev-13', type: 'rev', title: '책근 기출 1~11번', category: '책임근재', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 32, date: '5/28',
    tasks: [
      { id: 'd32-new', type: 'new', title: '자보 Ch 3 2절 (자손/무보험/PM)', pages: 'p. 70~88', category: '자동차보험', revisionStep: 1 },
      { id: 'd32-rev-1', type: 'rev', title: '자보 Ch 3 1절', pages: 'p. 31~69', category: '자동차보험', revisionStep: 2, gap: 1 },
      { id: 'd32-rev-3', type: 'rev', title: '자보 Ch 1~2', pages: 'p. 2~13', category: '자동차보험', revisionStep: 3, gap: 3 },
      { id: 'd32-rev-6', type: 'rev', title: '책근 약술 29~42번', category: '책임근재', revisionStep: 4, gap: 6 },
      { id: 'd32-rev-13', type: 'rev', title: '책근 기출 12~22번', category: '책임근재', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 33, date: '5/29',
    tasks: [
      { id: 'd33-new', type: 'new', title: '자보 Ch 3 3절 & Ch 4', pages: 'p. 89~108', category: '자동차보험', revisionStep: 1 },
      { id: 'd33-rev-1', type: 'rev', title: '자보 Ch 3 2절', pages: 'p. 70~88', category: '자동차보험', revisionStep: 2, gap: 1 },
      { id: 'd33-rev-3', type: 'rev', title: '자보 Ch 2', pages: 'p. 14~30', category: '자동차보험', revisionStep: 3, gap: 3 },
      { id: 'd33-rev-6', type: 'rev', title: '책근 취약사례 보완', category: '책임근재', revisionStep: 4, gap: 6 },
      { id: 'd33-rev-13', type: 'rev', title: '책근 기출 23~44번', category: '책임근재', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 34, date: '5/30',
    tasks: [
      { id: 'd34-new', type: 'new', title: '자보 Ch 5 (사망/부상 산식)', pages: 'p. 109~125', category: '자동차보험', revisionStep: 1 },
      { id: 'd34-rev-1', type: 'rev', title: '자보 Ch 3 3절 & 4', pages: 'p. 89~108', category: '자동차보험', revisionStep: 2, gap: 1 },
      { id: 'd34-rev-3', type: 'rev', title: '자보 Ch 3 1절', pages: 'p. 31~69', category: '자동차보험', revisionStep: 3, gap: 3 },
      { id: 'd34-rev-6', type: 'rev', title: '책근 총정리', category: '책임근재', revisionStep: 4, gap: 6 },
      { id: 'd34-rev-13', type: 'rev', title: '책근 유형별 1~15번', category: '책임근재', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 35, date: '5/31',
    tasks: [
      { id: 'd35-new', type: 'new', title: '자보 Ch 5 (후유장애)', pages: 'p. 126~140', category: '자동차보험', revisionStep: 1 },
      { id: 'd35-rev-1', type: 'rev', title: '자보 Ch 5 (사망/부상)', pages: 'p. 109~125', category: '자동차보험', revisionStep: 2, gap: 1 },
      { id: 'd35-rev-3', type: 'rev', title: '자보 Ch 3 2절', pages: 'p. 70~88', category: '자동차보험', revisionStep: 3, gap: 3 },
      { id: 'd35-rev-6', type: 'rev', title: '자보 Ch 1~2', pages: 'p. 2~13', category: '자동차보험', revisionStep: 4, gap: 6 },
      { id: 'd35-rev-13', type: 'rev', title: '책근 유형별 16~30번', category: '책임근재', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 36, date: '6/1',
    tasks: [
      { id: 'd36-new', type: 'new', title: '자보 Ch 6 1~4절 (과실일반)', pages: 'p. 141~160', category: '자동차보험', revisionStep: 1 },
      { id: 'd36-rev-1', type: 'rev', title: '자보 Ch 5 (후유장애)', pages: 'p. 126~140', category: '자동차보험', revisionStep: 2, gap: 1 },
      { id: 'd36-rev-3', type: 'rev', title: '자보 Ch 3 3절 & 4', pages: 'p. 89~108', category: '자동차보험', revisionStep: 3, gap: 3 },
      { id: 'd36-rev-6', type: 'rev', title: '자보 Ch 2', pages: 'p. 14~30', category: '자동차보험', revisionStep: 4, gap: 6 },
      { id: 'd36-rev-13', type: 'rev', title: '책근 유형별 31~44번', category: '책임근재', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 37, date: '6/2',
    tasks: [
      { id: 'd37-new', type: 'new', title: '자보 Ch 6 5~7절 (과실수정)', pages: 'p. 161~180', category: '자동차보험', revisionStep: 1 },
      { id: 'd37-rev-1', type: 'rev', title: '자보 Ch 6 1~4절', pages: 'p. 141~160', category: '자동차보험', revisionStep: 2, gap: 1 },
      { id: 'd37-rev-3', type: 'rev', title: '자보 Ch 5 (사망/부상)', pages: 'p. 109~125', category: '자동차보험', revisionStep: 3, gap: 3 },
      { id: 'd37-rev-6', type: 'rev', title: '자보 Ch 3 1절', pages: 'p. 31~69', category: '자동차보험', revisionStep: 4, gap: 6 },
      { id: 'd37-rev-13', type: 'rev', title: '책근 약술 1~14번', category: '책임근재', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 38, date: '6/3',
    tasks: [
      { id: 'd38-new', type: 'new', title: '자보 Ch 7 (구상권 등)', pages: 'p. 181~200', category: '자동차보험', revisionStep: 1 },
      { id: 'd38-rev-1', type: 'rev', title: '자보 Ch 6 5~7절', pages: 'p. 161~180', category: '자동차보험', revisionStep: 2, gap: 1 },
      { id: 'd38-rev-3', type: 'rev', title: '자보 Ch 5 (후유장애)', pages: 'p. 126~140', category: '자동차보험', revisionStep: 3, gap: 3 },
      { id: 'd38-rev-6', type: 'rev', title: '자보 Ch 3 2절', pages: 'p. 70~88', category: '자동차보험', revisionStep: 4, gap: 6 },
      { id: 'd38-rev-13', type: 'rev', title: '책근 약술 15~28번', category: '책임근재', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 39, date: '6/4',
    tasks: [
      { id: 'd39-new', type: 'new', title: '자보 Ch 2 법리 재회독', pages: 'p. 5~30', category: '자동차보험', revisionStep: 1 },
      { id: 'd39-rev-1', type: 'rev', title: '자보 Ch 7', pages: 'p. 181~200', category: '자동차보험', revisionStep: 2, gap: 1 },
      { id: 'd39-rev-3', type: 'rev', title: '자보 Ch 6 1~4절', pages: 'p. 141~160', category: '자동차보험', revisionStep: 3, gap: 3 },
      { id: 'd39-rev-6', type: 'rev', title: '자보 Ch 3 3절 & 4', pages: 'p. 89~108', category: '자동차보험', revisionStep: 4, gap: 6 },
      { id: 'd39-rev-13', type: 'rev', title: '책근 약술 29~42번', category: '책임근재', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 40, date: '6/5',
    tasks: [
      { id: 'd40-new', type: 'new', title: '자보 Ch 5 계산 연습', pages: 'p. 109~140', category: '자동차보험', revisionStep: 1 },
      { id: 'd40-rev-1', type: 'rev', title: '자보 Ch 2 법리 재회독', pages: 'p. 5~30', category: '자동차보험', revisionStep: 2, gap: 1 },
      { id: 'd40-rev-3', type: 'rev', title: '자보 Ch 6 5~7절', pages: 'p. 161~180', category: '자동차보험', revisionStep: 3, gap: 3 },
      { id: 'd40-rev-6', type: 'rev', title: '자보 Ch 5 (사망/부상)', pages: 'p. 109~125', category: '자동차보험', revisionStep: 4, gap: 6 },
      { id: 'd40-rev-13', type: 'rev', title: '책근 취약사례 보완', category: '책임근재', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 41, date: '6/6',
    tasks: [
      { id: 'd41-new', type: 'new', title: '자보 기출유형 분석', category: '자동차보험', revisionStep: 1 },
      { id: 'd41-rev-1', type: 'rev', title: '자보 Ch 5 계산 연습', pages: 'p. 109~140', category: '자동차보험', revisionStep: 2, gap: 1 },
      { id: 'd41-rev-3', type: 'rev', title: '자보 Ch 7', pages: 'p. 181~200', category: '자동차보험', revisionStep: 3, gap: 3 },
      { id: 'd41-rev-6', type: 'rev', title: '자보 Ch 5 (후유장애)', pages: 'p. 126~140', category: '자동차보험', revisionStep: 4, gap: 6 },
      { id: 'd41-rev-13', type: 'rev', title: '책근 총정리', category: '책임근재', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 42, date: '6/7',
    tasks: [
      { id: 'd42-new', type: 'new', title: '자보 전체 흐름 단권화', category: '자동차보험', revisionStep: 1 },
      { id: 'd42-rev-1', type: 'rev', title: '자보 기출유형 분석', category: '자동차보험', revisionStep: 2, gap: 1 },
      { id: 'd42-rev-3', type: 'rev', title: '자보 Ch 2 법리 재회독', pages: 'p. 5~30', category: '자동차보험', revisionStep: 3, gap: 3 },
      { id: 'd42-rev-6', type: 'rev', title: '자보 Ch 6 1~4절', pages: 'p. 141~160', category: '자동차보험', revisionStep: 4, gap: 6 },
      { id: 'd42-rev-13', type: 'rev', title: '자보 Ch 1~2', pages: 'p. 2~13', category: '자동차보험', revisionStep: 5, gap: 13 }
    ]
  },

  // --- 4단계: 제3보험 (43~56일차) ---
  {
    day: 43, date: '6/8',
    tasks: [
      { id: 'd43-new', type: 'new', title: '제3보험 1~2장 (계약전 알릴의무)', category: '제3보험', revisionStep: 1 },
      { id: 'd43-rev-1', type: 'rev', title: '자보 전체 흐름 단권화', category: '자동차보험', revisionStep: 2, gap: 1 },
      { id: 'd43-rev-3', type: 'rev', title: '자보 Ch 5 계산 연습', pages: 'p. 109~140', category: '자동차보험', revisionStep: 3, gap: 3 },
      { id: 'd43-rev-6', type: 'rev', title: '자보 Ch 6 5~7절', pages: 'p. 161~180', category: '자동차보험', revisionStep: 4, gap: 6 },
      { id: 'd43-rev-13', type: 'rev', title: '자보 Ch 2', pages: 'p. 14~30', category: '자동차보험', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 44, date: '6/9',
    tasks: [
      { id: 'd44-new', type: 'new', title: '제3보험 2장 하 (해지 등)', category: '제3보험', revisionStep: 1 },
      { id: 'd44-rev-1', type: 'rev', title: '제3보험 1~2장 (계약전 알릴의무)', category: '제3보험', revisionStep: 2, gap: 1 },
      { id: 'd44-rev-3', type: 'rev', title: '자보 기출유형 분석', category: '자동차보험', revisionStep: 3, gap: 3 },
      { id: 'd44-rev-6', type: 'rev', title: '자보 Ch 7', pages: 'p. 181~200', category: '자동차보험', revisionStep: 4, gap: 6 },
      { id: 'd44-rev-13', type: 'rev', title: '자보 Ch 3 1절', pages: 'p. 31~69', category: '자동차보험', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 45, date: '6/10',
    tasks: [
      { id: 'd45-new', type: 'new', title: '장해분류표 1 (눈/귀/코 등)', category: '제3보험', revisionStep: 1 },
      { id: 'd45-rev-1', type: 'rev', title: '제3보험 2장 하 (해지 등)', category: '제3보험', revisionStep: 2, gap: 1 },
      { id: 'd45-rev-3', type: 'rev', title: '자보 전체 흐름 단권화', category: '자동차보험', revisionStep: 3, gap: 3 },
      { id: 'd45-rev-6', type: 'rev', title: '자보 Ch 2 법리 재회독', pages: 'p. 5~30', category: '자동차보험', revisionStep: 4, gap: 6 },
      { id: 'd45-rev-13', type: 'rev', title: '자보 Ch 3 2절', pages: 'p. 70~88', category: '자동차보험', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 46, date: '6/11',
    tasks: [
      { id: 'd46-new', type: 'new', title: '장해분류표 2 (외모/척추)', category: '제3보험', revisionStep: 1 },
      { id: 'd46-rev-1', type: 'rev', title: '장해분류표 1 (눈/귀/코 등)', category: '제3보험', revisionStep: 2, gap: 1 },
      { id: 'd46-rev-3', type: 'rev', title: '제3보험 1~2장 (계약전 알릴의무)', category: '제3보험', revisionStep: 3, gap: 3 },
      { id: 'd46-rev-6', type: 'rev', title: '자보 Ch 5 계산 연습', pages: 'p. 109~140', category: '자동차보험', revisionStep: 4, gap: 6 },
      { id: 'd46-rev-13', type: 'rev', title: '자보 Ch 3 3절 & Ch 4', pages: 'p. 89~108', category: '자동차보험', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 47, date: '6/12',
    tasks: [
      { id: 'd47-new', type: 'new', title: '장해분류표 3 (체간골/팔/다리)', category: '제3보험', revisionStep: 1 },
      { id: 'd47-rev-1', type: 'rev', title: '장해분류표 2 (외모/척추)', category: '제3보험', revisionStep: 2, gap: 1 },
      { id: 'd47-rev-3', type: 'rev', title: '제3보험 2장 하 (해지 등)', category: '제3보험', revisionStep: 3, gap: 3 },
      { id: 'd47-rev-6', type: 'rev', title: '자보 기출유형 분석', category: '자동차보험', revisionStep: 4, gap: 6 },
      { id: 'd47-rev-13', type: 'rev', title: '자보 Ch 5 (사망/부상 산식)', pages: 'p. 109~125', category: '자동차보험', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 48, date: '6/13',
    tasks: [
      { id: 'd48-new', type: 'new', title: '장해분류표 4 (손/발가락/신경계)', category: '제3보험', revisionStep: 1 },
      { id: 'd48-rev-1', type: 'rev', title: '장해분류표 3 (체간골/팔/다리)', category: '제3보험', revisionStep: 2, gap: 1 },
      { id: 'd48-rev-3', type: 'rev', title: '장해분류표 1 (눈/귀/코 등)', category: '제3보험', revisionStep: 3, gap: 3 },
      { id: 'd48-rev-6', type: 'rev', title: '자보 전체 흐름 단권화', category: '자동차보험', revisionStep: 4, gap: 6 },
      { id: 'd48-rev-13', type: 'rev', title: '자보 Ch 5 (후유장애)', pages: 'p. 126~140', category: '자동차보험', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 49, date: '6/14',
    tasks: [
      { id: 'd49-new', type: 'new', title: '실손 1 (3세대 기본/특약)', category: '제3보험', revisionStep: 1 },
      { id: 'd49-rev-1', type: 'rev', title: '장해분류표 4 (손/발가락/신경계)', category: '제3보험', revisionStep: 2, gap: 1 },
      { id: 'd49-rev-3', type: 'rev', title: '장해분류표 2 (외모/척추)', category: '제3보험', revisionStep: 3, gap: 3 },
      { id: 'd49-rev-6', type: 'rev', title: '제3보험 1~2장 (계약전 알릴의무)', category: '제3보험', revisionStep: 4, gap: 6 },
      { id: 'd49-rev-13', type: 'rev', title: '자보 Ch 6 1~4절 (과실일반)', pages: 'p. 141~160', category: '자동차보험', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 50, date: '6/15',
    tasks: [
      { id: 'd50-new', type: 'new', title: '실손 2 (4세대 급여/비급여)', category: '제3보험', revisionStep: 1 },
      { id: 'd50-rev-1', type: 'rev', title: '실손 1 (3세대 기본/특약)', category: '제3보험', revisionStep: 2, gap: 1 },
      { id: 'd50-rev-3', type: 'rev', title: '장해분류표 3 (체간골/팔/다리)', category: '제3보험', revisionStep: 3, gap: 3 },
      { id: 'd50-rev-6', type: 'rev', title: '제3보험 2장 하 (해지 등)', category: '제3보험', revisionStep: 4, gap: 6 },
      { id: 'd50-rev-13', type: 'rev', title: '자보 Ch 6 5~7절 (과실수정)', pages: 'p. 161~180', category: '자동차보험', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 51, date: '6/16',
    tasks: [
      { id: 'd51-new', type: 'new', title: '실손 3 (3/4세대 비교)', category: '제3보험', revisionStep: 1 },
      { id: 'd51-rev-1', type: 'rev', title: '실손 2 (4세대 급여/비급여)', category: '제3보험', revisionStep: 2, gap: 1 },
      { id: 'd51-rev-3', type: 'rev', title: '장해분류표 4 (손/발가락/신경계)', category: '제3보험', revisionStep: 3, gap: 3 },
      { id: 'd51-rev-6', type: 'rev', title: '장해분류표 1 (눈/귀/코 등)', category: '제3보험', revisionStep: 4, gap: 6 },
      { id: 'd51-rev-13', type: 'rev', title: '자보 Ch 7 (구상권 등)', pages: 'p. 181~200', category: '자동차보험', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 52, date: '6/17',
    tasks: [
      { id: 'd52-new', type: 'new', title: '제3장 상해보험 및 특약', category: '제3보험', revisionStep: 1 },
      { id: 'd52-rev-1', type: 'rev', title: '실손 3 (3/4세대 비교)', category: '제3보험', revisionStep: 2, gap: 1 },
      { id: 'd52-rev-3', type: 'rev', title: '실손 1 (3세대 기본/특약)', category: '제3보험', revisionStep: 3, gap: 3 },
      { id: 'd52-rev-6', type: 'rev', title: '장해분류표 2 (외모/척추)', category: '제3보험', revisionStep: 4, gap: 6 },
      { id: 'd52-rev-13', type: 'rev', title: '자보 Ch 2 법리 재회독', pages: 'p. 5~30', category: '자동차보험', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 53, date: '6/18',
    tasks: [
      { id: 'd53-new', type: 'new', title: '제4장 질병보험 (암 진단비)', category: '제3보험', revisionStep: 1 },
      { id: 'd53-rev-1', type: 'rev', title: '제3장 상해보험 및 특약', category: '제3보험', revisionStep: 2, gap: 1 },
      { id: 'd53-rev-3', type: 'rev', title: '실손 2 (4세대 급여/비급여)', category: '제3보험', revisionStep: 3, gap: 3 },
      { id: 'd53-rev-6', type: 'rev', title: '장해분류표 3 (체간골/팔/다리)', category: '제3보험', revisionStep: 4, gap: 6 },
      { id: 'd53-rev-13', type: 'rev', title: '자보 Ch 5 계산 연습', pages: 'p. 109~140', category: '자동차보험', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 54, date: '6/19',
    tasks: [
      { id: 'd54-new', type: 'new', title: '제5장 간병보험 및 기타', category: '제3보험', revisionStep: 1 },
      { id: 'd54-rev-1', type: 'rev', title: '제4장 질병보험 (암 진단비)', category: '제3보험', revisionStep: 2, gap: 1 },
      { id: 'd54-rev-3', type: 'rev', title: '실손 3 (3/4세대 비교)', category: '제3보험', revisionStep: 3, gap: 3 },
      { id: 'd54-rev-6', type: 'rev', title: '장해분류표 4 (손/발가락/신경계)', category: '제3보험', revisionStep: 4, gap: 6 },
      { id: 'd54-rev-13', type: 'rev', title: '자보 기출유형 분석', category: '자동차보험', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 55, date: '6/20',
    tasks: [
      { id: 'd55-new', type: 'new', title: '기출 사례 1 (장해 합산)', category: '제3보험', revisionStep: 1 },
      { id: 'd55-rev-1', type: 'rev', title: '제5장 간병보험 및 기타', category: '제3보험', revisionStep: 2, gap: 1 },
      { id: 'd55-rev-3', type: 'rev', title: '제3장 상해보험 및 특약', category: '제3보험', revisionStep: 3, gap: 3 },
      { id: 'd55-rev-6', type: 'rev', title: '실손 1 (3세대 기본/특약)', category: '제3보험', revisionStep: 4, gap: 6 },
      { id: 'd55-rev-13', type: 'rev', title: '자보 전체 흐름 단권화', category: '자동차보험', revisionStep: 5, gap: 13 }
    ]
  },
  {
    day: 56, date: '6/21',
    tasks: [
      { id: 'd56-new', type: 'new', title: '기출 사례 2 (실손/표준)', category: '제3보험', revisionStep: 1 },
      { id: 'd56-rev-1', type: 'rev', title: '기출 사례 1 (장해 합산)', category: '제3보험', revisionStep: 2, gap: 1 },
      { id: 'd56-rev-3', type: 'rev', title: '제4장 질병보험 (암 진단비)', category: '제3보험', revisionStep: 3, gap: 3 },
      { id: 'd56-rev-6', type: 'rev', title: '실손 2 (4세대 급여/비급여)', category: '제3보험', revisionStep: 4, gap: 6 },
      { id: 'd56-rev-13', type: 'rev', title: '제3보험 1~2장 (계약전 알릴의무)', category: '제3보험', revisionStep: 5, gap: 13 }
    ]
  }
];
