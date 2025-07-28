export const createFinanceProfile = async (formData) => {
  try {
    const response = await fetch('http://localhost:4000/api/finance-profile', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to create finance profile');
    }

    return {
      status: response.status,
      data
    };

  } catch (error) {
    console.error('Error creating finance profile:', error);
    return {
      status: 500,
      error: error.message
    };
  }
}