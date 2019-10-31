function checkPalindrome(inputString)
{
	const len = inputString.length;
	for (let i = 0; i < len / 2; i++)
	{
		if (inputString.charAt(i) != inputString.charAt(len - 1 - i ))
		{
			return false;
		}
	}
	return true;
}
