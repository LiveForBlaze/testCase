# -*- encoding: utf-8 -*-
# stub: cicero 0.0.1 ruby lib

Gem::Specification.new do |s|
  s.name = "cicero".freeze
  s.version = "0.0.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Rogelio Guzman".freeze]
  s.date = "2011-08-27"
  s.description = "A lorem Ipsum generator".freeze
  s.email = ["chinog9@gmail.com".freeze]
  s.homepage = "http://github.com/rogeliog/cicero".freeze
  s.rubygems_version = "3.0.3".freeze
  s.summary = "A lorem Ipsum generator".freeze

  s.installed_by_version = "3.0.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<rspec>.freeze, [">= 0"])
      s.add_development_dependency(%q<ruby-debug19>.freeze, [">= 0"])
      s.add_development_dependency(%q<guard>.freeze, [">= 0"])
      s.add_development_dependency(%q<growl>.freeze, [">= 0"])
    else
      s.add_dependency(%q<rspec>.freeze, [">= 0"])
      s.add_dependency(%q<ruby-debug19>.freeze, [">= 0"])
      s.add_dependency(%q<guard>.freeze, [">= 0"])
      s.add_dependency(%q<growl>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<rspec>.freeze, [">= 0"])
    s.add_dependency(%q<ruby-debug19>.freeze, [">= 0"])
    s.add_dependency(%q<guard>.freeze, [">= 0"])
    s.add_dependency(%q<growl>.freeze, [">= 0"])
  end
end
