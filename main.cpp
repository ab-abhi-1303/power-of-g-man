#include<bits/stdc++.h>
using namespace std;

class Point{
  public:
      int x;
      int y;
      char direction;
};

char directions[] = {'N','E', 'S', 'W'};
char noDirection = 'Z';

int getDistancePower(Point source, Point destination) {
  int xDifference = abs(source.x - destination.x);
  int yDifference = abs(source.y - destination.y);

  return (xDifference + yDifference) * 10;
}

char* getDirectiontoMove(Point source, Point destination) {
  char x, y; //final direction in x and y

  if(destination.x > source.x) {
    x = directions[1];
  } 
  else if(destination.x < source.x) {
    x = directions[3];
  }
  else{
    x = noDirection;  //move nowhere in X-Dir
  }

  if(destination.y > source.y) {
    y = directions[0];
  }
  else if(destination.y < source.y) {
    y = directions[2];
  }
  else{
    y = noDirection; //move nowhere in Y-Direction
  }

  char* result = new char[3];
  result[0] = x;
  result[1] = y;
  result[2] = '\0'; 
  return result;
}

int getDirectionPower(char currentDirection, char* directionToMove) {
  if(directionToMove[0] == noDirection && directionToMove[1] == noDirection)
    return 0;

  else if(directionToMove[0] == noDirection) { //move only in Y-Direction
    if(currentDirection == directionToMove[1]) 
      return 0;
    else if(currentDirection == directions[3] || currentDirection == directions[1])
      return 1;
    else
      return 2;
  }
  
  else if(directionToMove[1] == noDirection) { //move only in X-Dir
    if(currentDirection == directionToMove[0]) 
      return 0;
    else if(currentDirection == directions[0] || currentDirection == directions[2])
      return 1;
    else
      return 2;
  }

  //move X and Y both
  else{
    if(currentDirection == directionToMove[0] || currentDirection == directionToMove[1])
      return 1;
    else
      return 2;
  }

}

int main(){
  Point src, dest;
  cout << "SOURCE ";
  cin >> src.x >> src.y >> src.direction;
  cout << "DESTINATION ";
  cin >> dest.x >> dest.y;
  cout << "PRINT_POWER" << endl;

  int distancePower = getDistancePower(src, dest);
  char* movableDirection = getDirectiontoMove(src, dest);
  int directionPower = getDirectionPower(src.direction, movableDirection) * 5;

  int powerRemaining = 200 - (distancePower + directionPower);
  cout << "POWER " << powerRemaining;
  delete[] movableDirection;
  return 0;
}