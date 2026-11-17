import { describe, expect, it } from "vitest";
import { TestDriver } from "testdriverai/vitest/hooks";

describe("Sample Smoke Test", () => {
  it("should open example.com and verify the content", async (context) => {
    const testdriver = TestDriver(context);

    await testdriver.provision.chrome({ url: "https://example.com" });

    const assertResult = await testdriver.assert("Example Domain is visible");
    expect(assertResult).toBeTruthy();
  });
});
