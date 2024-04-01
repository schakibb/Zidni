import React from "react";
import { Card, CardContent, CardHeader } from "../../../../components/ui/card";

const CongratulationsPage = () => {
  return (
    <div className="bg-inherit max-h-[70dvh] flex items-center justify-center mt-36">
      <Card className="w-[80dvw] mx-auto p-8 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        <CardHeader className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Congratulations! 🎉
        </CardHeader>
        <CardContent className="text-gray-600 dark:text-gray-300">
          You have successfully completed the course.
        </CardContent>
        <iframe
          className="rounded-lg"
          src="https://docs.google.com/forms/d/e/1FAIpQLScUAETrTia84BQsNpRLsp7Z2IZAcuZ_RqKx3Urcbp29GHXT6g/viewform?embedded=true"
          width="100%"
          height="450px"
          marginheight="0"
          marginwidth="0"
        >
          Loading...
        </iframe>
      </Card>
    </div>
  );
};

export default CongratulationsPage;
