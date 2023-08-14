function isValidPassword(password: string): boolean {
    return password.length >= 8;
  }
  
  const password = "q1w2e3r4!";
  const valid = isValidPassword(password);
  
  if (valid) {
    console.log("유효한 패스워드입니다!");
  } else {
    console.log("유효하지 않은 패스워드입니다!");
  }

  function calculateArea(radius: number): number {
    return Math.PI * radius * radius;
  }
  
  const radius = 5;
  const area = calculateArea(radius);
  console.log(`반지름이 ${radius}인 원의 넓이: ${area}`);

  function greet(name: string): string {
    return `안녕, ${name}!`;
  }
  
  const name1 = "Spartan";
  const greeting = greet(name1);
  console.log(greeting);

  function calculateSum(numbers: number[]): number {
    let sum: number = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  
  const testScores: number[] = [90, 85, 78, 92, 88];
  const sumScore = calculateSum(testScores);
  console.log(`점수의 총합: ${sumScore}`);

  const person: [string, number, boolean] = ['Spartan', 25, false];
// const person2: [string, number, boolean] = [25, 'Spartan', false]; // 오류!

enum UserRole {
    ADMIN = "ADMIN",
    EDITOR = "EDITOR",
    USER = "USER",
  }
  
  enum UserLevel {
    NOT_OPERATOR, // 0
    OPERATOR // 1
  }
  
  function checkPermission(userRole: UserRole, userLevel: UserLevel): void {
    if (userLevel === UserLevel.NOT_OPERATOR) {
      console.log('당신은 일반 사용자 레벨이에요');
    } else {
      console.log('당신은 운영자 레벨이군요');
    } 
  
    if (userRole === UserRole.ADMIN) {
      console.log("당신은 어드민이군요");
    } else if (userRole === UserRole.EDITOR) {
      console.log("당신은 에디터에요");
    } else {
      console.log("당신은 사용자군요");
    }
  }
  
  const userRole: UserRole = UserRole.EDITOR;
  const userLevel: UserLevel = UserLevel.NOT_OPERATOR;
  checkPermission(userRole, userLevel);

  function main()
  {

  }
  main();