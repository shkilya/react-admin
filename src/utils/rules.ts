interface Required {
    required: boolean,
    message: string
}

export const rules = {
  required: (message = 'Value is required'): Required => {
    return {
      required: true,
      message,
    } as Required;
  },
};

