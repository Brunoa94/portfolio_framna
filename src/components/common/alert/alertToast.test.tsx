import { createAlertStore, defaultInitState } from "@/store/alertStore";
import { render, screen, act, waitFor } from "@testing-library/react";
import AlertToast from "./alertToast";
import {
  AlertStoreContext,
  AlertStoreProvider,
} from "@/providers/alertStoreProvider";

describe("Testing Alert toast component", () => {
  const store = createAlertStore();

  beforeEach(() => {
    store.setState(defaultInitState);
  });

  it("hide toast when store state is empty", () => {
    render(
      <AlertStoreProvider>
        <AlertToast />
      </AlertStoreProvider>
    );

    const toast = screen.getByTestId("alert-toast");

    expect(toast).toHaveStyle("right: -340px");
  });

  it("show toast when an alert message is sent", async () => {
    const storeApi = createAlertStore();

    render(
      <AlertStoreContext.Provider value={storeApi}>
        <AlertToast />
      </AlertStoreContext.Provider>
    );

    act(() => {
      storeApi.getState().updateAlert({
        message: "Mock alert message",
        status: 200,
      });
    });

    const toast = screen.getByTestId("alert-toast");

    await waitFor(() => {
      expect(toast).toHaveStyle("right: 80px");
    });
  });
});
