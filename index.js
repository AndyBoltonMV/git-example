const sum = (num1, num2) => {
  return num1 + num2;
};

sum(1, 2);

function getElementCount(array $data) {
  $result = 0;
  for ($index = 0; $index < count($data); $index++) {
    $result++;
  }
  return $result;
} 