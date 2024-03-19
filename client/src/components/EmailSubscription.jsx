import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { EmailSubscriptionSchema } from "../schemas";
import Form from "./Form";
import Button from "./Button";
import { subscriptionInputData } from "../utils/inputsData";
import { toast } from "react-toastify";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EmailSubscription = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm({
    resolver: yupResolver(EmailSubscriptionSchema),
  });

  async function onSubmit(data) {
    const emailJsData = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_email: data.email,
        to_name: "DatoT",
      },
    };
    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        emailJsData
      );
      if (res.status === 200) {
        reset();
        toast.success(
          "Thanks so much for subscribing to the Perfect Recipe Newsletter!"
        );
      }
    } catch (error) {
      const errorMessage =
        error.response.data ||
        "Failed to send newsletter. Please try again later.";
      toast.error(errorMessage);
    }
  }

  return (
    <section className="bg-white dark:bg-gray-900 my-5">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Let&apos;s stay in Touch
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
            Join our newsletter, so that we reach out to you with our news and
            offers.
          </p>
          <div className="flex justify-center ">
            <Form
              onSubmit={handleSubmit(onSubmit)}
              register={register}
              errors={errors}
              inputsData={subscriptionInputData}
            >
              <div className=" flex items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <Button
                  btnText="Subscribe"
                  type="submit"
                  disabled={!isDirty || isSubmitting}
                />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSubscription;
