package io.github.gipo999.smispi.implementations;

import io.github.gipo999.smispi.NamedService;
import io.github.gipo999.smispi.interfaces.NamedService003;

public class Ns003Standard implements NamedService003 {

  @Override
  public String getServiceImplementationName() {
    return NamedService.IMPL_STANDARD_NAME;
  }
}
